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
    const saved = localStorage.getItem("openhub-theme");
    if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
    const btn = $("#theme-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        if (isDark) {
          document.documentElement.removeAttribute("data-theme");
          localStorage.setItem("openhub-theme", "light");
          btn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
          document.documentElement.setAttribute("data-theme", "dark");
          localStorage.setItem("openhub-theme", "dark");
          btn.innerHTML = '<i class="fas fa-sun"></i>';
        }
      });
      if (localStorage.getItem("openhub-theme") === "dark") {
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

    document.title = `${post.title} — Openhub`;

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

    document.title = `${community.name} — Openhub`;

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

    renderNewsItems(container, NEWS_ITEMS);
    initNewsFilters(container);
    initNewsSearch(container);
  }

  function renderNewsItems(container, items) {
    container.innerHTML = items.map(renderNewsCard).join("");
    attachNewsDiscussion(container);
    attachNewsVotes(container);
  }

  function renderNewsCard(item) {
    const tags = (item.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
    const isInterview = item.type === "interview";
    const typeBadge = isInterview
      ? '<span class="news-type-badge interview"><i class="fas fa-video"></i> Interview</span>'
      : '<span class="news-type-badge news"><i class="fas fa-newspaper"></i> News</span>';

    const mediaLink = isInterview
      ? `<a href="${escapeHtml(item.videoUrl)}" target="_blank" rel="noopener" class="video-link"><i class="fab fa-youtube"></i> Watch Video</a>`
      : `<a href="${escapeHtml(item.articleUrl)}" target="_blank" rel="noopener" class="article-link"><i class="fas fa-external-link-alt"></i> Read Article</a>`;

    const durationInfo = item.duration
      ? `<span class="duration-badge"><i class="fas fa-clock"></i> ${item.duration}</span>`
      : "";

    const metaParts = [];
    if (item.source) metaParts.push(`<strong>${escapeHtml(item.source)}</strong>`);
    if (item.guest) metaParts.push(`Guest: ${escapeHtml(item.guest)}`);
    if (item.author) metaParts.push(`by ${escapeHtml(item.author)}`);
    if (item.date) metaParts.push(item.date);

    const comments = (item.comments || []).map((c) => `
      <div class="discussion-comment">
        <span class="discussion-comment-author">u/${escapeHtml(c.author)}</span>
        <span class="discussion-comment-time">${c.time}</span>
        <div class="discussion-comment-body">${escapeHtml(c.body)}</div>
        <div class="discussion-comment-actions">
          <button><i class="fas fa-arrow-up"></i> ${c.upvotes || 0}</button>
          <button><i class="fas fa-reply"></i> Reply</button>
        </div>
      </div>
    `).join("");

    return `
      <div class="news-card" data-type="${item.type}" data-id="${item.id}">
        <div class="news-card-header">
          ${typeBadge}
          <div class="news-card-meta">${metaParts.join(" <span>&bull;</span> ")}</div>
        </div>
        <div class="news-card-body">
          <h3 class="news-card-title">${escapeHtml(item.title)}</h3>
          <p class="news-card-summary">${escapeHtml(item.summary)}</p>
          ${tags ? `<div class="news-card-tags">${tags}</div>` : ""}
        </div>
        <div class="news-card-actions">
          ${mediaLink}
          <button class="action-btn news-vote-btn" data-id="${item.id}"><i class="fas fa-arrow-up"></i> ${formatNumber(item.upvotes)}</button>
          <button class="action-btn"><i class="fas fa-share"></i> Share</button>
          <button class="action-btn"><i class="fas fa-bookmark"></i> Save</button>
          ${durationInfo}
        </div>
        <div class="discussion-box">
          <div class="discussion-header"><i class="fas fa-comments"></i> Community Discussion</div>
          <div class="discussion-input-row">
            <textarea placeholder="Share your thoughts on this..." rows="1" data-news-id="${item.id}"></textarea>
            <button class="discussion-submit" data-news-id="${item.id}">Comment</button>
          </div>
          <div class="discussion-comments" id="news-comments-${item.id}">${comments}</div>
        </div>
      </div>
    `;
  }

  function attachNewsVotes(container) {
    container.querySelectorAll(".news-vote-btn").forEach((btn) => {
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

  function attachNewsDiscussion(container) {
    container.querySelectorAll(".discussion-submit").forEach((btn) => {
      btn.addEventListener("click", () => {
        const newsId = parseInt(btn.dataset.newsId);
        const textarea = container.querySelector(`textarea[data-news-id="${newsId}"]`);
        const body = textarea.value.trim();
        if (!body) return;

        const item = NEWS_ITEMS.find((n) => n.id === newsId);
        if (!item) return;

        const newComment = {
          author: currentUser || "anonymous",
          body,
          upvotes: 1,
          time: "just now"
        };
        item.comments.push(newComment);

        const commentsEl = container.querySelector(`#news-comments-${newsId}`);
        commentsEl.innerHTML += `
          <div class="discussion-comment">
            <span class="discussion-comment-author">u/${escapeHtml(newComment.author)}</span>
            <span class="discussion-comment-time">${newComment.time}</span>
            <div class="discussion-comment-body">${escapeHtml(newComment.body)}</div>
            <div class="discussion-comment-actions">
              <button><i class="fas fa-arrow-up"></i> 1</button>
              <button><i class="fas fa-reply"></i> Reply</button>
            </div>
          </div>
        `;
        textarea.value = "";
      });
    });
  }

  function initNewsFilters(container) {
    $$(".sort-btn[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".sort-btn[data-filter]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        const filtered = filter === "all" ? NEWS_ITEMS : NEWS_ITEMS.filter((n) => n.type === filter);
        renderNewsItems(container, filtered);
      });
    });
  }

  function initNewsSearch(container) {
    const input = $("#search-input");
    if (!input) return;
    let debounce;
    input.addEventListener("input", () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const q = input.value.toLowerCase().trim();
        if (!q) {
          renderNewsItems(container, NEWS_ITEMS);
          return;
        }
        const filtered = NEWS_ITEMS.filter((n) =>
          n.title.toLowerCase().includes(q) ||
          n.summary.toLowerCase().includes(q) ||
          (n.guest && n.guest.toLowerCase().includes(q)) ||
          (n.source && n.source.toLowerCase().includes(q)) ||
          (n.tags && n.tags.some((t) => t.toLowerCase().includes(q)))
        );
        renderNewsItems(container, filtered);
      }, 300);
    });
  }

  // ===== KNOWLEDGE PAGE =====
  function initKnowledgePage() {
    const container = $("#papers-container");
    if (!container) return;

    renderPapers(container, PAPERS);
    initPaperFilters(container);
    initPaperSearch(container);
  }

  function renderPaperItems(container, items) {
    container.innerHTML = items.map(renderPaperCard).join("");
    attachPaperDiscussion(container);
    attachPaperVotes(container);
  }

  function renderPapers(container, items) {
    renderPaperItems(container, items);
  }

  function renderPaperCard(paper) {
    const tags = (paper.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
    const venueBadge = paper.venueType === "journal"
      ? `<span class="venue-badge journal"><i class="fas fa-book"></i> ${escapeHtml(paper.venue)}</span>`
      : `<span class="venue-badge conference"><i class="fas fa-users"></i> ${escapeHtml(paper.venue)}</span>`;

    const authors = paper.authors.map((a) => escapeHtml(a)).join(", ");

    const comments = (paper.comments || []).map((c) => `
      <div class="discussion-comment">
        <span class="discussion-comment-author">u/${escapeHtml(c.author)}</span>
        <span class="discussion-comment-time">${c.time}</span>
        <div class="discussion-comment-body">${escapeHtml(c.body)}</div>
        <div class="discussion-comment-actions">
          <button><i class="fas fa-arrow-up"></i> ${c.upvotes || 0}</button>
          <button><i class="fas fa-reply"></i> Reply</button>
        </div>
      </div>
    `).join("");

    return `
      <div class="paper-card" data-venue-type="${paper.venueType}" data-id="${paper.id}">
        <div class="paper-card-header">
          ${venueBadge}
          <div class="paper-card-meta">${paper.date}</div>
        </div>
        <div class="paper-card-body">
          <h3 class="paper-card-title">${escapeHtml(paper.title)}</h3>
          <div class="paper-card-authors">${authors}</div>
          <p class="paper-card-abstract">${escapeHtml(paper.abstract)}</p>
          ${tags ? `<div class="paper-card-tags">${tags}</div>` : ""}
        </div>
        <div class="paper-card-actions">
          <a href="${escapeHtml(paper.paperUrl)}" target="_blank" rel="noopener" class="paper-link primary"><i class="fas fa-file-alt"></i> Read Paper</a>
          <a href="${escapeHtml(paper.pdfUrl)}" target="_blank" rel="noopener" class="paper-link secondary"><i class="fas fa-file-pdf"></i> PDF</a>
          <button class="action-btn paper-vote-btn" data-id="${paper.id}"><i class="fas fa-arrow-up"></i> ${formatNumber(paper.upvotes)}</button>
          <button class="action-btn"><i class="fas fa-share"></i> Share</button>
          <button class="action-btn"><i class="fas fa-bookmark"></i> Save</button>
        </div>
        <div class="discussion-box">
          <div class="discussion-header"><i class="fas fa-comments"></i> Community Discussion</div>
          <div class="discussion-input-row">
            <textarea placeholder="Discuss this paper..." rows="1" data-paper-id="${paper.id}"></textarea>
            <button class="discussion-submit-paper" data-paper-id="${paper.id}">Comment</button>
          </div>
          <div class="discussion-comments" id="paper-comments-${paper.id}">${comments}</div>
        </div>
      </div>
    `;
  }

  function attachPaperVotes(container) {
    container.querySelectorAll(".paper-vote-btn").forEach((btn) => {
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

  function attachPaperDiscussion(container) {
    container.querySelectorAll(".discussion-submit-paper").forEach((btn) => {
      btn.addEventListener("click", () => {
        const paperId = parseInt(btn.dataset.paperId);
        const textarea = container.querySelector(`textarea[data-paper-id="${paperId}"]`);
        const body = textarea.value.trim();
        if (!body) return;

        const paper = PAPERS.find((p) => p.id === paperId);
        if (!paper) return;

        const newComment = {
          author: currentUser || "anonymous",
          body,
          upvotes: 1,
          time: "just now"
        };
        paper.comments.push(newComment);

        const commentsEl = container.querySelector(`#paper-comments-${paperId}`);
        commentsEl.innerHTML += `
          <div class="discussion-comment">
            <span class="discussion-comment-author">u/${escapeHtml(newComment.author)}</span>
            <span class="discussion-comment-time">${newComment.time}</span>
            <div class="discussion-comment-body">${escapeHtml(newComment.body)}</div>
            <div class="discussion-comment-actions">
              <button><i class="fas fa-arrow-up"></i> 1</button>
              <button><i class="fas fa-reply"></i> Reply</button>
            </div>
          </div>
        `;
        textarea.value = "";
      });
    });
  }

  function initPaperFilters(container) {
    $$(".sort-btn[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".sort-btn[data-filter]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        const filtered = filter === "all" ? PAPERS : PAPERS.filter((p) => p.venueType === filter);
        renderPaperItems(container, filtered);
      });
    });
  }

  function initPaperSearch(container) {
    const input = $("#search-input");
    if (!input) return;
    let debounce;
    input.addEventListener("input", () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const q = input.value.toLowerCase().trim();
        if (!q) {
          renderPaperItems(container, PAPERS);
          return;
        }
        const filtered = PAPERS.filter((p) =>
          p.title.toLowerCase().includes(q) ||
          p.abstract.toLowerCase().includes(q) ||
          p.venue.toLowerCase().includes(q) ||
          p.authors.some((a) => a.toLowerCase().includes(q)) ||
          (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
        );
        renderPaperItems(container, filtered);
      }, 300);
    });
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
    initSearch();
    initSort();
    initAuth();

    // Determine which page we're on
    const path = window.location.pathname;

    if (path.includes("post.html")) {
      initPostDetail();
    } else if (path.includes("community.html")) {
      initCommunityPage();
    } else if (path.includes("news.html")) {
      initNewsPage();
    } else if (path.includes("knowledge.html")) {
      initKnowledgePage();
    } else {
      // Home page
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
