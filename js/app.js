// ===== OPENHUB — MAIN APPLICATION =====

(function () {
  "use strict";

  // ===== STATE =====
  let currentUser = null;
  let posts = [...SAMPLE_POSTS];
  let nextPostId = posts.length + 1;

  // ===== DOM HELPERS =====
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ===== THEME =====
  function initTheme() {
    const saved = localStorage.getItem("openreddit-theme");
    if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
    const btn = $("#theme-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        if (isDark) {
          document.documentElement.removeAttribute("data-theme");
          localStorage.setItem("openreddit-theme", "light");
          btn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
          document.documentElement.setAttribute("data-theme", "dark");
          localStorage.setItem("openreddit-theme", "dark");
          btn.innerHTML = '<i class="fas fa-sun"></i>';
        }
      });
      if (localStorage.getItem("openreddit-theme") === "dark") {
        btn.innerHTML = '<i class="fas fa-sun"></i>';
      }
    }
  }

  // ===== MOBILE MENU =====
  function initMobileMenu() {
    const btn = $("#mobile-menu-btn");
    const sidebar = $("#sidebar-left");
    if (btn && sidebar) {
      btn.addEventListener("click", () => sidebar.classList.toggle("open"));
    }
  }

  // ===== RENDER POST CARD =====
  function renderPostCard(post) {
    const communityData = COMMUNITIES[post.communityKey] || {};
    const tags = (post.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
    return `
      <article class="post-card" data-id="${post.id}">
        <div class="vote-column">
          <button class="vote-btn upvote-btn" data-id="${post.id}" data-dir="up" title="Upvote">
            <i class="fas fa-arrow-up"></i>
          </button>
          <span class="vote-count" id="vote-${post.id}">${formatNumber(post.upvotes)}</span>
          <button class="vote-btn downvote-btn" data-id="${post.id}" data-dir="down" title="Downvote">
            <i class="fas fa-arrow-down"></i>
          </button>
        </div>
        <div class="post-content">
          <div class="post-meta">
            <a href="community.html?c=${post.communityKey}">${post.community}</a>
            <span>&bull;</span>
            <span>Posted by <a href="#">u/${post.author}</a></span>
            <span>&bull;</span>
            <span>${post.time}</span>
            ${post.pinned ? '<span class="tag" style="background:#fdcb6e;color:#2d3436"><i class="fas fa-thumbtack"></i> Pinned</span>' : ""}
          </div>
          <h2 class="post-title">
            <a href="post.html?id=${post.id}">${escapeHtml(post.title)}</a>
          </h2>
          ${post.body ? `<div class="post-body-preview">${escapeHtml(post.body.substring(0, 200))}${post.body.length > 200 ? "..." : ""}</div>` : ""}
          ${tags ? `<div class="post-tags">${tags}</div>` : ""}
          <div class="post-actions">
            <button class="action-btn"><i class="fas fa-comment"></i> ${formatNumber(post.comments)} Comments</button>
            <button class="action-btn share-btn"><i class="fas fa-share"></i> Share</button>
            <button class="action-btn save-btn"><i class="fas fa-bookmark"></i> Save</button>
          </div>
        </div>
      </article>
    `;
  }

  // ===== RENDER POSTS =====
  function renderPosts(container, postList) {
    if (!container) return;
    container.innerHTML = postList.map(renderPostCard).join("");
    attachVoteListeners(container);
  }

  // ===== VOTING =====
  function attachVoteListeners(container) {
    container.querySelectorAll(".vote-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = parseInt(btn.dataset.id);
        const dir = btn.dataset.dir;
        const post = posts.find((p) => p.id === id);
        if (!post) return;

        const card = btn.closest(".vote-column");
        const upBtn = card.querySelector(".upvote-btn");
        const downBtn = card.querySelector(".downvote-btn");
        const countEl = card.querySelector(".vote-count");

        if (dir === "up") {
          if (upBtn.classList.contains("upvoted")) {
            upBtn.classList.remove("upvoted");
            post.upvotes--;
          } else {
            upBtn.classList.add("upvoted");
            post.upvotes++;
            if (downBtn.classList.contains("downvoted")) {
              downBtn.classList.remove("downvoted");
              post.upvotes++;
            }
          }
        } else {
          if (downBtn.classList.contains("downvoted")) {
            downBtn.classList.remove("downvoted");
            post.upvotes++;
          } else {
            downBtn.classList.add("downvoted");
            post.upvotes--;
            if (upBtn.classList.contains("upvoted")) {
              upBtn.classList.remove("upvoted");
              post.upvotes--;
            }
          }
        }
        countEl.textContent = formatNumber(post.upvotes);
      });
    });
  }

  // ===== TRENDING =====
  function renderTrending() {
    const list = $("#trending-list");
    if (!list || typeof TRENDING === "undefined") return;
    list.innerHTML = TRENDING.map(
      (t, i) => `
      <li>
        <div class="trending-community">${t.community}</div>
        <div class="trending-title">${t.title}</div>
        <div class="trending-community">${t.upvotes} upvotes</div>
      </li>
    `
    ).join("");
  }

  // ===== SORT =====
  function initSort() {
    $$(".sort-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".sort-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const sort = btn.dataset.sort;
        let sorted = [...posts];
        if (sort === "hot") sorted.sort((a, b) => b.upvotes + b.comments * 3 - (a.upvotes + a.comments * 3));
        else if (sort === "new") sorted = [...posts].reverse();
        else if (sort === "top") sorted.sort((a, b) => b.upvotes - a.upvotes);
        const container = $("#posts-container");
        renderPosts(container, sorted);
      });
    });
  }

  // ===== SEARCH =====
  function initSearch() {
    const input = $("#search-input");
    if (!input) return;
    let debounce;
    input.addEventListener("input", () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const q = input.value.toLowerCase().trim();
        const container = $("#posts-container");
        if (!q) {
          renderPosts(container, posts);
          return;
        }
        const filtered = posts.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            (p.body && p.body.toLowerCase().includes(q)) ||
            p.community.toLowerCase().includes(q) ||
            (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
        );
        renderPosts(container, filtered);
      }, 300);
    });
  }

  // ===== CREATE POST MODAL =====
  function initCreatePost() {
    const triggers = [$("#create-post-trigger"), $("#create-post-btn")];
    const overlay = $("#modal-overlay");
    const closeBtn = $("#modal-close");
    const cancelBtn = $("#modal-cancel");
    const submitBtn = $("#modal-submit");

    function openModal() {
      if (overlay) overlay.classList.add("active");
    }
    function closeModal() {
      if (overlay) overlay.classList.remove("active");
    }

    triggers.forEach((t) => { if (t) t.addEventListener("click", openModal); });
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });

    // Post type tabs
    $$(".post-type-tabs .tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        $$(".post-type-tabs .tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const type = tab.dataset.type;
        const linkInput = $("#post-link");
        const bodyInput = $("#post-body");
        if (type === "link") {
          if (linkInput) linkInput.classList.remove("hidden");
          if (bodyInput) bodyInput.classList.add("hidden");
        } else {
          if (linkInput) linkInput.classList.add("hidden");
          if (bodyInput) bodyInput.classList.remove("hidden");
        }
      });
    });

    // Submit
    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        const title = ($("#post-title") || {}).value || "";
        const body = ($("#post-body") || {}).value || "";
        const community = ($("#post-community") || {}).value || "";
        const tagsRaw = ($("#post-tags") || {}).value || "";

        if (!title.trim()) { alert("Please enter a title."); return; }
        if (!community) { alert("Please select a community."); return; }

        const tags = tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);
        const communityKey = Object.keys(COMMUNITIES).find(
          (k) => COMMUNITIES[k].name === community
        ) || "machinelearning";

        const newPost = {
          id: nextPostId++,
          community,
          communityKey,
          author: currentUser || "anonymous",
          title: title.trim(),
          body: body.trim(),
          tags,
          upvotes: 1,
          comments: 0,
          time: "just now",
          pinned: false,
        };

        posts.unshift(newPost);
        const container = $("#posts-container");
        renderPosts(container, posts);
        closeModal();

        // Clear form
        if ($("#post-title")) $("#post-title").value = "";
        if ($("#post-body")) $("#post-body").value = "";
        if ($("#post-community")) $("#post-community").value = "";
        if ($("#post-tags")) $("#post-tags").value = "";
      });
    }
  }

  // ===== AUTH MODAL =====
  function initAuth() {
    const overlay = $("#auth-overlay");
    const closeBtn = $("#auth-close");
    const loginBtn = $("#login-btn");
    const signupBtn = $("#signup-btn");
    const toggleLink = $("#auth-toggle");
    const titleEl = $("#auth-title");
    const emailField = $("#auth-email");
    const submitBtn = $("#auth-submit");
    let isSignup = false;

    function openAuth(signup) {
      isSignup = signup;
      if (titleEl) titleEl.textContent = signup ? "Sign Up" : "Log In";
      if (emailField) emailField.classList.toggle("hidden", !signup);
      if (submitBtn) submitBtn.textContent = signup ? "Sign Up" : "Log In";
      if (toggleLink) toggleLink.textContent = signup ? "Log In" : "Sign Up";
      if (overlay) overlay.classList.add("active");
    }
    function closeAuth() {
      if (overlay) overlay.classList.remove("active");
    }

    if (loginBtn) loginBtn.addEventListener("click", () => openAuth(false));
    if (signupBtn) signupBtn.addEventListener("click", () => openAuth(true));
    if (closeBtn) closeBtn.addEventListener("click", closeAuth);
    if (overlay) overlay.addEventListener("click", (e) => { if (e.target === overlay) closeAuth(); });
    if (toggleLink) {
      toggleLink.addEventListener("click", (e) => {
        e.preventDefault();
        openAuth(!isSignup);
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        const username = ($("#auth-username") || {}).value || "";
        if (!username.trim()) { alert("Please enter a username."); return; }
        currentUser = username.trim();
        closeAuth();
        updateUserUI();
      });
    }
  }

  function updateUserUI() {
    const loginBtn = $("#login-btn");
    const signupBtn = $("#signup-btn");
    if (currentUser) {
      if (loginBtn) { loginBtn.textContent = `u/${currentUser}`; loginBtn.classList.remove("btn-outline"); loginBtn.classList.add("btn-primary"); }
      if (signupBtn) signupBtn.classList.add("hidden");
    }
  }

  // ===== POST DETAIL PAGE =====
  function initPostDetail() {
    const container = $("#post-detail");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const postId = parseInt(params.get("id"));
    const post = posts.find((p) => p.id === postId);

    if (!post) {
      container.innerHTML = "<p>Post not found.</p>";
      return;
    }

    document.title = `${post.title} — OpenReddit`;

    const tags = (post.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
    container.innerHTML = `
      <div class="post-meta">
        <a href="community.html?c=${post.communityKey}">${post.community}</a>
        <span>&bull;</span>
        <span>Posted by <a href="#">u/${post.author}</a></span>
        <span>&bull;</span>
        <span>${post.time}</span>
      </div>
      <h1 class="post-title">${escapeHtml(post.title)}</h1>
      ${tags ? `<div class="post-tags">${tags}</div>` : ""}
      <div class="post-body-full">${escapeHtml(post.body || "").replace(/\n/g, "<br>")}</div>
      <div class="vote-row">
        <button class="vote-btn upvote-btn" data-id="${post.id}" data-dir="up"><i class="fas fa-arrow-up"></i></button>
        <span class="vote-count" id="vote-${post.id}">${formatNumber(post.upvotes)}</span>
        <button class="vote-btn downvote-btn" data-id="${post.id}" data-dir="down"><i class="fas fa-arrow-down"></i></button>
        <span style="margin-left:16px" class="action-btn"><i class="fas fa-comment"></i> ${formatNumber(post.comments)} Comments</span>
        <button class="action-btn share-btn"><i class="fas fa-share"></i> Share</button>
        <button class="action-btn save-btn"><i class="fas fa-bookmark"></i> Save</button>
      </div>
    `;

    // Vote on detail page
    container.querySelectorAll(".vote-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const dir = btn.dataset.dir;
        const row = btn.closest(".vote-row");
        const upBtn = row.querySelector(".upvote-btn");
        const downBtn = row.querySelector(".downvote-btn");
        const countEl = row.querySelector(".vote-count");

        if (dir === "up") {
          if (upBtn.classList.contains("upvoted")) { upBtn.classList.remove("upvoted"); post.upvotes--; }
          else {
            upBtn.classList.add("upvoted"); post.upvotes++;
            if (downBtn.classList.contains("downvoted")) { downBtn.classList.remove("downvoted"); post.upvotes++; }
          }
        } else {
          if (downBtn.classList.contains("downvoted")) { downBtn.classList.remove("downvoted"); post.upvotes++; }
          else {
            downBtn.classList.add("downvoted"); post.upvotes--;
            if (upBtn.classList.contains("upvoted")) { upBtn.classList.remove("upvoted"); post.upvotes--; }
          }
        }
        countEl.textContent = formatNumber(post.upvotes);
      });
    });

    // Community sidebar info
    const communityData = COMMUNITIES[post.communityKey];
    if (communityData) {
      const nameEl = $("#post-community-name");
      const descEl = $("#post-community-desc");
      if (nameEl) nameEl.textContent = communityData.name;
      if (descEl) descEl.textContent = communityData.description;
    }

    // Render comments
    renderComments();
    initCommentForm(post);
  }

  // ===== COMMENTS =====
  function renderComments() {
    const container = $("#comments-container");
    const countEl = $("#comment-count");
    if (!container) return;
    if (countEl) countEl.textContent = `${SAMPLE_COMMENTS.length} Comments`;
    container.innerHTML = SAMPLE_COMMENTS.map((c) => renderComment(c, false)).join("");
    attachCommentVotes(container);
  }

  function renderComment(comment, nested) {
    const replies = (comment.replies || []).map((r) => renderComment(r, true)).join("");
    return `
      <div class="comment ${nested ? "nested" : ""}">
        <div class="comment-header">
          <span class="comment-author">u/${comment.author}</span>
          <span class="comment-time">${comment.time}</span>
        </div>
        <div class="comment-body">${escapeHtml(comment.body)}</div>
        <div class="comment-actions">
          <button class="comment-vote-up" data-id="${comment.id}"><i class="fas fa-arrow-up"></i> ${comment.upvotes}</button>
          <button><i class="fas fa-reply"></i> Reply</button>
          <button><i class="fas fa-share"></i> Share</button>
        </div>
        ${replies}
      </div>
    `;
  }

  function attachCommentVotes(container) {
    container.querySelectorAll(".comment-vote-up").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("upvoted")) {
          btn.classList.remove("upvoted");
          btn.style.color = "";
        } else {
          btn.classList.add("upvoted");
          btn.style.color = "var(--upvote)";
        }
      });
    });
  }

  function initCommentForm(post) {
    const submitBtn = $("#comment-submit");
    const input = $("#comment-input");
    if (!submitBtn || !input) return;

    submitBtn.addEventListener("click", () => {
      const body = input.value.trim();
      if (!body) return;

      const newComment = {
        id: Date.now(),
        author: currentUser || "anonymous",
        body,
        upvotes: 1,
        time: "just now",
        replies: [],
      };

      SAMPLE_COMMENTS.unshift(newComment);
      renderComments();
      input.value = "";
    });
  }

  // ===== COMMUNITY PAGE =====
  function initCommunityPage() {
    const banner = $("#community-banner");
    if (!banner) return;

    const params = new URLSearchParams(window.location.search);
    const key = params.get("c") || "machinelearning";
    const community = COMMUNITIES[key];

    if (!community) return;

    document.title = `${community.name} — OpenReddit`;

    const iconEl = $("#community-icon");
    const nameEl = $("#community-name");
    const taglineEl = $("#community-tagline");
    const descEl = $("#community-description");
    const membersEl = $("#stat-members");
    const onlineEl = $("#stat-online");
    const createdEl = $("#community-created");
    const rulesEl = $("#community-rules");
    const modEl = $("#mod-list");

    if (iconEl) iconEl.innerHTML = `<i class="fas ${community.icon}"></i>`;
    if (nameEl) nameEl.textContent = community.name;
    if (taglineEl) taglineEl.textContent = community.tagline;
    if (descEl) descEl.textContent = community.description;
    if (membersEl) membersEl.textContent = community.members;
    if (onlineEl) onlineEl.textContent = community.online;
    if (createdEl) createdEl.textContent = community.created;
    if (rulesEl) rulesEl.innerHTML = community.rules.map((r) => `<li>${r}</li>`).join("");
    if (modEl) modEl.innerHTML = community.mods.map((m) => `<li><i class="fas fa-shield"></i> u/${m}</li>`).join("");

    // Join button
    const joinBtn = $("#join-btn");
    if (joinBtn) {
      joinBtn.addEventListener("click", () => {
        if (joinBtn.textContent === "Join") {
          joinBtn.textContent = "Joined";
          joinBtn.classList.remove("btn-primary");
          joinBtn.classList.add("btn-outline");
        } else {
          joinBtn.textContent = "Join";
          joinBtn.classList.add("btn-primary");
          joinBtn.classList.remove("btn-outline");
        }
      });
    }

    // Filter posts for this community
    const communityPosts = posts.filter((p) => p.communityKey === key);
    const container = $("#posts-container");
    renderPosts(container, communityPosts);
  }

  // ===== NEWS PAGE =====
  function initNewsPage() {
    const container = $("#news-container");
    if (!container) return;

    let newsItems = typeof NEWS_ITEMS !== "undefined" ? [...NEWS_ITEMS] : [];
    let currentFilter = "all";
    let currentSection = "all";

    function getFiltered() {
      let items = [...newsItems];
      if (currentSection === "news") items = items.filter((n) => n.type === "news");
      else if (currentSection === "videos") items = items.filter((n) => n.type === "interview");
      if (currentFilter !== "all") items = items.filter((n) => n.category === currentFilter);
      return items;
    }

    function renderNewsItems() {
      const items = getFiltered();
      if (items.length === 0) {
        container.innerHTML = '<div class="card" style="text-align:center;padding:32px"><p>No items found for this filter.</p></div>';
        return;
      }
      container.innerHTML = items.map(renderNewsCard).join("");
      attachNewsInteractions(container);
    }

    function renderNewsCard(item) {
      const badgeClass = "badge-" + item.category;
      const badgeLabel = item.type === "interview" ? "Interview" : item.category.charAt(0).toUpperCase() + item.category.slice(1);
      const tags = (item.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
      const previewComments = (item.comments || []).slice(0, 2);

      const linkBtn = item.type === "interview"
        ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener" class="news-video-link"><i class="fab fa-youtube"></i> Watch Video</a>`
        : `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener" class="news-article-link"><i class="fas fa-external-link-alt"></i> Read Article</a>`;

      return `
        <article class="news-card" data-id="${item.id}">
          <div class="news-card-inner">
            <div class="news-vote-col">
              <button class="vote-btn upvote-btn" data-id="news-${item.id}" data-dir="up"><i class="fas fa-arrow-up"></i></button>
              <span class="vote-count">${formatNumber(item.upvotes)}</span>
              <button class="vote-btn downvote-btn" data-id="news-${item.id}" data-dir="down"><i class="fas fa-arrow-down"></i></button>
            </div>
            <div class="news-card-body">
              <span class="news-type-badge ${badgeClass}">
                <i class="fas ${item.type === "interview" ? "fa-video" : "fa-newspaper"}"></i> ${badgeLabel}
              </span>
              <h2 class="news-card-title"><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.title)}</a></h2>
              <div class="news-source">
                <strong>${escapeHtml(item.source)}</strong>
                <span>&bull;</span>
                <span>by ${escapeHtml(item.author)}</span>
                <span>&bull;</span>
                <span>${item.date}</span>
              </div>
              <div class="news-summary" id="summary-${item.id}">${escapeHtml(item.summary)}</div>
              <button class="news-summary-toggle" data-id="${item.id}">Read more</button>
              ${linkBtn}
              <div class="post-tags">${tags}</div>
              <div class="news-card-footer">
                <button class="action-btn discuss-btn" data-id="${item.id}" data-type="news"><i class="fas fa-comment"></i> ${item.commentCount} Discussion</button>
                <button class="action-btn share-btn"><i class="fas fa-share"></i> Share</button>
                <button class="action-btn save-btn"><i class="fas fa-bookmark"></i> Save</button>
              </div>
              ${previewComments.length > 0 ? `
                <div class="inline-discussion">
                  <h4><i class="fas fa-comments"></i> Top Comments</h4>
                  ${previewComments.map((c) => `
                    <div class="discussion-preview-comment">
                      <span class="comment-author">u/${c.author}</span>
                      <div class="comment-body">${escapeHtml(c.body)}</div>
                      <span class="comment-meta"><i class="fas fa-arrow-up"></i> ${c.upvotes} &bull; ${c.time}</span>
                    </div>
                  `).join("")}
                  <button class="view-discussion-btn" data-id="${item.id}" data-type="news">View all ${item.commentCount} comments &rarr;</button>
                </div>
              ` : ""}
            </div>
          </div>
        </article>
      `;
    }

    function attachNewsInteractions(el) {
      // Summary toggle
      el.querySelectorAll(".news-summary-toggle").forEach((btn) => {
        btn.addEventListener("click", () => {
          const summaryEl = el.querySelector(`#summary-${btn.dataset.id}`);
          if (summaryEl) {
            summaryEl.classList.toggle("expanded");
            btn.textContent = summaryEl.classList.contains("expanded") ? "Show less" : "Read more";
          }
        });
      });

      // Vote buttons
      el.querySelectorAll(".news-vote-col .vote-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const col = btn.closest(".news-vote-col");
          const upBtn = col.querySelector(".upvote-btn");
          const downBtn = col.querySelector(".downvote-btn");
          const countEl = col.querySelector(".vote-count");
          const idStr = btn.dataset.id;
          const newsId = parseInt(idStr.replace("news-", ""));
          const item = newsItems.find((n) => n.id === newsId);
          if (!item) return;

          if (btn.dataset.dir === "up") {
            if (upBtn.classList.contains("upvoted")) { upBtn.classList.remove("upvoted"); item.upvotes--; }
            else { upBtn.classList.add("upvoted"); item.upvotes++; if (downBtn.classList.contains("downvoted")) { downBtn.classList.remove("downvoted"); item.upvotes++; } }
          } else {
            if (downBtn.classList.contains("downvoted")) { downBtn.classList.remove("downvoted"); item.upvotes++; }
            else { downBtn.classList.add("downvoted"); item.upvotes--; if (upBtn.classList.contains("upvoted")) { upBtn.classList.remove("upvoted"); item.upvotes--; } }
          }
          countEl.textContent = formatNumber(item.upvotes);
        });
      });

      // Discussion buttons
      el.querySelectorAll(".discuss-btn, .view-discussion-btn").forEach((btn) => {
        btn.addEventListener("click", () => openDiscussion(parseInt(btn.dataset.id), "news"));
      });
    }

    // Section tabs
    $$(".section-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        $$(".section-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        currentSection = tab.dataset.section;
        renderNewsItems();
      });
    });

    // Filter links
    $$(".filter-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        $$(".filter-link").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        currentFilter = link.dataset.filter;
        renderNewsItems();
      });
    });

    // Search
    const searchInput = $("#search-input");
    if (searchInput) {
      let debounce;
      searchInput.addEventListener("input", () => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          const q = searchInput.value.toLowerCase().trim();
          if (!q) { newsItems = [...NEWS_ITEMS]; }
          else {
            newsItems = NEWS_ITEMS.filter((n) =>
              n.title.toLowerCase().includes(q) ||
              n.summary.toLowerCase().includes(q) ||
              n.source.toLowerCase().includes(q) ||
              (n.tags && n.tags.some((t) => t.toLowerCase().includes(q)))
            );
          }
          renderNewsItems();
        }, 300);
      });
    }

    // Trending sidebar
    const trendingEl = $("#news-trending");
    if (trendingEl) {
      const topNews = [...NEWS_ITEMS].sort((a, b) => b.upvotes - a.upvotes).slice(0, 5);
      trendingEl.innerHTML = topNews.map((n) => `
        <li>
          <div class="trending-community">${n.source}</div>
          <div class="trending-title">${n.title}</div>
          <div class="trending-community">${formatNumber(n.upvotes)} upvotes</div>
        </li>
      `).join("");
    }

    // Featured interviews sidebar
    const featuredEl = $("#featured-interviews");
    if (featuredEl) {
      const interviews = NEWS_ITEMS.filter((n) => n.type === "interview").slice(0, 4);
      featuredEl.innerHTML = interviews.map((n) => `
        <div class="featured-interview">
          <div class="featured-interview-title">${n.title}</div>
          <div class="featured-interview-source">${n.source} &bull; ${n.date}</div>
        </div>
      `).join("");
    }

    // Submit news modal
    initSubmitNewsModal(newsItems, renderNewsItems);

    renderNewsItems();
  }

  function initSubmitNewsModal(newsItems, renderCallback) {
    const overlay = $("#submit-news-overlay");
    const openBtn = $("#submit-news-btn");
    const closeBtn = $("#submit-news-close");
    const cancelBtn = $("#submit-news-cancel");
    const submitBtn = $("#submit-news-submit");

    if (openBtn && overlay) openBtn.addEventListener("click", () => overlay.classList.add("active"));
    if (closeBtn) closeBtn.addEventListener("click", () => overlay.classList.remove("active"));
    if (cancelBtn) cancelBtn.addEventListener("click", () => overlay.classList.remove("active"));
    if (overlay) overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.classList.remove("active"); });

    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        const title = ($("#news-title-input") || {}).value || "";
        const url = ($("#news-url-input") || {}).value || "";
        const source = ($("#news-source-input") || {}).value || "";
        const summary = ($("#news-summary-input") || {}).value || "";
        const type = ($("#news-type-select") || {}).value || "news";
        const tagsRaw = ($("#news-tags-input") || {}).value || "";

        if (!title.trim()) { alert("Please enter a title."); return; }

        const newItem = {
          id: Date.now(),
          type,
          title: title.trim(),
          source: source.trim() || "User Submitted",
          author: currentUser || "anonymous",
          url: url.trim(),
          date: "Just now",
          category: type === "interview" ? "interview" : "breaking",
          summary: summary.trim(),
          tags: tagsRaw.split(",").map((t) => t.trim()).filter(Boolean),
          upvotes: 1,
          commentCount: 0,
          comments: [],
        };

        newsItems.unshift(newItem);
        NEWS_ITEMS.unshift(newItem);
        if (overlay) overlay.classList.remove("active");
        renderCallback();

        // Clear form
        ["#news-title-input", "#news-url-input", "#news-source-input", "#news-summary-input", "#news-tags-input"].forEach((sel) => {
          const el = $(sel);
          if (el) el.value = "";
        });
      });
    }
  }

  // ===== KNOWLEDGE PAGE =====
  function initKnowledgePage() {
    const container = $("#papers-container");
    if (!container) return;

    let papers = typeof PAPERS !== "undefined" ? [...PAPERS] : [];
    let currentFilter = "all";
    let currentVenue = "all";
    let currentSection = "all";

    function getFiltered() {
      let items = [...papers];
      if (currentSection === "spotlight") items = items.filter((p) => p.spotlight);
      else if (currentSection === "recent") items.sort((a, b) => new Date(b.date) - new Date(a.date));
      else if (currentSection === "discussed") items.sort((a, b) => b.commentCount - a.commentCount);
      if (currentFilter !== "all") items = items.filter((p) => p.area === currentFilter);
      if (currentVenue !== "all") items = items.filter((p) => p.venue === currentVenue);
      return items;
    }

    function renderPapers() {
      const items = getFiltered();
      if (items.length === 0) {
        container.innerHTML = '<div class="card" style="text-align:center;padding:32px"><p>No papers found for this filter.</p></div>';
        return;
      }
      container.innerHTML = items.map(renderPaperCard).join("");
      attachPaperInteractions(container);
    }

    function renderPaperCard(paper) {
      const tags = (paper.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
      const previewComments = (paper.comments || []).slice(0, 2);

      return `
        <article class="paper-card" data-id="${paper.id}">
          <div class="paper-card-inner">
            <div class="paper-vote-col">
              <button class="vote-btn upvote-btn" data-id="paper-${paper.id}" data-dir="up"><i class="fas fa-arrow-up"></i></button>
              <span class="vote-count">${formatNumber(paper.upvotes)}</span>
              <button class="vote-btn downvote-btn" data-id="paper-${paper.id}" data-dir="down"><i class="fas fa-arrow-down"></i></button>
            </div>
            <div class="paper-card-body">
              <span class="paper-venue-badge ${paper.spotlight ? "spotlight" : ""}">
                ${paper.spotlight ? '<i class="fas fa-star"></i> ' : ""}${paper.venue} ${paper.year}
              </span>
              <h2 class="paper-card-title"><a href="${escapeHtml(paper.url)}" target="_blank" rel="noopener">${escapeHtml(paper.title)}</a></h2>
              <div class="paper-authors">${paper.authors.join(", ")}</div>
              <div class="paper-summary"><strong>TL;DR:</strong> ${escapeHtml(paper.summary)}</div>
              <button class="paper-abstract-toggle" data-id="${paper.id}"><i class="fas fa-chevron-down"></i> Show Abstract</button>
              <div class="paper-abstract" id="abstract-${paper.id}">${escapeHtml(paper.abstract)}</div>
              <div class="paper-links">
                <a href="${escapeHtml(paper.url)}" target="_blank" rel="noopener" class="paper-link"><i class="fas fa-file-pdf"></i> Paper</a>
                <a href="#" class="paper-link"><i class="fas fa-code"></i> Code</a>
                <a href="#" class="paper-link"><i class="fas fa-quote-right"></i> Cite</a>
              </div>
              <div class="post-tags">${tags}</div>
              <div class="paper-card-footer">
                <button class="action-btn discuss-btn" data-id="${paper.id}" data-type="paper"><i class="fas fa-comment"></i> ${paper.commentCount} Discussion</button>
                <button class="action-btn share-btn"><i class="fas fa-share"></i> Share</button>
                <button class="action-btn save-btn"><i class="fas fa-bookmark"></i> Save</button>
              </div>
              ${previewComments.length > 0 ? `
                <div class="inline-discussion">
                  <h4><i class="fas fa-comments"></i> Top Comments</h4>
                  ${previewComments.map((c) => `
                    <div class="discussion-preview-comment">
                      <span class="comment-author">u/${c.author}</span>
                      <div class="comment-body">${escapeHtml(c.body)}</div>
                      <span class="comment-meta"><i class="fas fa-arrow-up"></i> ${c.upvotes} &bull; ${c.time}</span>
                    </div>
                  `).join("")}
                  <button class="view-discussion-btn" data-id="${paper.id}" data-type="paper">View all ${paper.commentCount} comments &rarr;</button>
                </div>
              ` : ""}
            </div>
          </div>
        </article>
      `;
    }

    function attachPaperInteractions(el) {
      // Abstract toggle
      el.querySelectorAll(".paper-abstract-toggle").forEach((btn) => {
        btn.addEventListener("click", () => {
          const abstractEl = el.querySelector(`#abstract-${btn.dataset.id}`);
          if (abstractEl) {
            abstractEl.classList.toggle("visible");
            const icon = btn.querySelector("i");
            if (abstractEl.classList.contains("visible")) {
              btn.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Abstract';
            } else {
              btn.innerHTML = '<i class="fas fa-chevron-down"></i> Show Abstract';
            }
          }
        });
      });

      // Vote buttons
      el.querySelectorAll(".paper-vote-col .vote-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const col = btn.closest(".paper-vote-col");
          const upBtn = col.querySelector(".upvote-btn");
          const downBtn = col.querySelector(".downvote-btn");
          const countEl = col.querySelector(".vote-count");
          const idStr = btn.dataset.id;
          const paperId = parseInt(idStr.replace("paper-", ""));
          const item = papers.find((p) => p.id === paperId);
          if (!item) return;

          if (btn.dataset.dir === "up") {
            if (upBtn.classList.contains("upvoted")) { upBtn.classList.remove("upvoted"); item.upvotes--; }
            else { upBtn.classList.add("upvoted"); item.upvotes++; if (downBtn.classList.contains("downvoted")) { downBtn.classList.remove("downvoted"); item.upvotes++; } }
          } else {
            if (downBtn.classList.contains("downvoted")) { downBtn.classList.remove("downvoted"); item.upvotes++; }
            else { downBtn.classList.add("downvoted"); item.upvotes--; if (upBtn.classList.contains("upvoted")) { upBtn.classList.remove("upvoted"); item.upvotes--; } }
          }
          countEl.textContent = formatNumber(item.upvotes);
        });
      });

      // Discussion buttons
      el.querySelectorAll(".discuss-btn, .view-discussion-btn").forEach((btn) => {
        btn.addEventListener("click", () => openDiscussion(parseInt(btn.dataset.id), "paper"));
      });
    }

    // Section tabs
    $$(".section-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        $$(".section-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        currentSection = tab.dataset.section;
        renderPapers();
      });
    });

    // Filter links (research area)
    $$(".filter-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        $$(".filter-link").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        currentFilter = link.dataset.filter;
        renderPapers();
      });
    });

    // Venue links
    $$(".venue-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        $$(".venue-link").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        currentVenue = link.dataset.venue;
        renderPapers();
      });
    });

    // Search
    const searchInput = $("#search-input");
    if (searchInput) {
      let debounce;
      searchInput.addEventListener("input", () => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          const q = searchInput.value.toLowerCase().trim();
          if (!q) { papers = [...PAPERS]; }
          else {
            papers = PAPERS.filter((p) =>
              p.title.toLowerCase().includes(q) ||
              p.summary.toLowerCase().includes(q) ||
              p.abstract.toLowerCase().includes(q) ||
              p.venue.toLowerCase().includes(q) ||
              p.authors.some((a) => a.toLowerCase().includes(q)) ||
              (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
            );
          }
          renderPapers();
        }, 300);
      });
    }

    // Trending papers sidebar
    const trendingEl = $("#papers-trending");
    if (trendingEl) {
      const topPapers = [...PAPERS].sort((a, b) => b.upvotes - a.upvotes).slice(0, 5);
      trendingEl.innerHTML = topPapers.map((p) => `
        <li>
          <div class="trending-community">${p.venue} ${p.year}</div>
          <div class="trending-title">${p.title}</div>
          <div class="trending-community">${formatNumber(p.upvotes)} upvotes &bull; ${p.commentCount} comments</div>
        </li>
      `).join("");
    }

    // Submit paper modal
    initSubmitPaperModal(papers, renderPapers);

    renderPapers();
  }

  function initSubmitPaperModal(papers, renderCallback) {
    const overlay = $("#submit-paper-overlay");
    const openBtn = $("#submit-paper-btn");
    const closeBtn = $("#submit-paper-close");
    const cancelBtn = $("#submit-paper-cancel");
    const submitBtn = $("#submit-paper-submit");

    if (openBtn && overlay) openBtn.addEventListener("click", () => overlay.classList.add("active"));
    if (closeBtn) closeBtn.addEventListener("click", () => overlay.classList.remove("active"));
    if (cancelBtn) cancelBtn.addEventListener("click", () => overlay.classList.remove("active"));
    if (overlay) overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.classList.remove("active"); });

    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        const title = ($("#paper-title-input") || {}).value || "";
        const authorsRaw = ($("#paper-authors-input") || {}).value || "";
        const url = ($("#paper-url-input") || {}).value || "";
        const venue = ($("#paper-venue-select") || {}).value || "arXiv";
        const summary = ($("#paper-summary-input") || {}).value || "";
        const tagsRaw = ($("#paper-tags-input") || {}).value || "";

        if (!title.trim()) { alert("Please enter a paper title."); return; }

        const newPaper = {
          id: Date.now(),
          title: title.trim(),
          authors: authorsRaw.split(",").map((a) => a.trim()).filter(Boolean),
          venue,
          year: 2026,
          url: url.trim(),
          date: "Just now",
          area: "nlp",
          spotlight: false,
          abstract: summary.trim(),
          summary: summary.trim(),
          tags: tagsRaw.split(",").map((t) => t.trim()).filter(Boolean),
          upvotes: 1,
          commentCount: 0,
          comments: [],
        };

        papers.unshift(newPaper);
        PAPERS.unshift(newPaper);
        if (overlay) overlay.classList.remove("active");
        renderCallback();

        ["#paper-title-input", "#paper-authors-input", "#paper-url-input", "#paper-summary-input", "#paper-tags-input"].forEach((sel) => {
          const el = $(sel);
          if (el) el.value = "";
        });
      });
    }
  }

  // ===== DISCUSSION MODAL (shared by News & Knowledge) =====
  function openDiscussion(itemId, type) {
    const overlay = $("#discussion-overlay");
    const titleEl = $("#discussion-title");
    const summaryEl = $("#discussion-item-summary");
    const commentsEl = $("#discussion-comments");
    const closeBtn = $("#discussion-close");
    const commentInput = $("#discussion-comment-input");
    const commentSubmit = $("#discussion-comment-submit");

    if (!overlay) return;

    const source = type === "news" ? NEWS_ITEMS : PAPERS;
    const item = source.find((i) => i.id === itemId);
    if (!item) return;

    if (titleEl) titleEl.textContent = "Discussion: " + item.title;
    if (summaryEl) {
      summaryEl.innerHTML = `
        <h4 style="margin-bottom:4px">${escapeHtml(item.title)}</h4>
        <p style="color:var(--text-muted);font-size:0.85rem">${type === "news" ? item.source + " &bull; " + item.date : item.venue + " " + item.year + " &bull; " + item.date}</p>
      `;
    }

    function renderDiscussionComments() {
      if (!commentsEl) return;
      if (!item.comments || item.comments.length === 0) {
        commentsEl.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:16px">No comments yet. Be the first to share your thoughts!</p>';
        return;
      }
      commentsEl.innerHTML = item.comments.map((c) => `
        <div class="comment">
          <div class="comment-header">
            <span class="comment-author">u/${c.author}</span>
            <span class="comment-time">${c.time}</span>
          </div>
          <div class="comment-body">${escapeHtml(c.body)}</div>
          <div class="comment-actions">
            <button class="comment-vote-up"><i class="fas fa-arrow-up"></i> ${c.upvotes}</button>
            <button><i class="fas fa-reply"></i> Reply</button>
          </div>
        </div>
      `).join("");

      commentsEl.querySelectorAll(".comment-vote-up").forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.classList.toggle("upvoted");
          btn.style.color = btn.classList.contains("upvoted") ? "var(--upvote)" : "";
        });
      });
    }

    renderDiscussionComments();
    overlay.classList.add("active");

    // Close handlers
    const closeHandler = () => overlay.classList.remove("active");
    if (closeBtn) {
      closeBtn.replaceWith(closeBtn.cloneNode(true));
      const newClose = $("#discussion-close");
      if (newClose) newClose.addEventListener("click", closeHandler);
    }
    overlay.onclick = (e) => { if (e.target === overlay) closeHandler(); };

    // Submit comment
    if (commentSubmit) {
      const newSubmit = commentSubmit.cloneNode(true);
      commentSubmit.replaceWith(newSubmit);
      newSubmit.addEventListener("click", () => {
        const input = $("#discussion-comment-input");
        const body = input ? input.value.trim() : "";
        if (!body) return;

        const newComment = {
          id: Date.now(),
          author: currentUser || "anonymous",
          body,
          upvotes: 1,
          time: "just now",
        };

        if (!item.comments) item.comments = [];
        item.comments.unshift(newComment);
        item.commentCount = (item.commentCount || 0) + 1;
        renderDiscussionComments();
        if (input) input.value = "";
      });
    }
  }

  // ===== HELPERS =====
  function formatNumber(n) {
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    return String(n);
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ===== INIT =====
  function init() {
    initTheme();
    initMobileMenu();
    initAuth();

    // Determine which page we're on
    const path = window.location.pathname;

    if (path.includes("post.html")) {
      initPostDetail();
    } else if (path.includes("community.html")) {
      initSearch();
      initSort();
      initCommunityPage();
    } else if (path.includes("news.html")) {
      initNewsPage();
    } else if (path.includes("knowledge.html")) {
      initKnowledgePage();
    } else {
      // Home page
      initSearch();
      initSort();
      const container = $("#posts-container");
      renderPosts(container, posts);
      renderTrending();
      initCreatePost();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
