// ===== OPENHUB — POSTS MODULE (rendering, voting, sorting, search) =====

(function (hub) {
  "use strict";

  var $ = hub.$;
  var $$ = hub.$$;

  hub.renderPostCard = function (post) {
    var communityData = COMMUNITIES[post.communityKey] || {};
    var tags = (post.tags || []).map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("");
    return (
      '<article class="post-card" data-id="' + post.id + '">' +
        '<div class="vote-column">' +
          '<button class="vote-btn upvote-btn" data-id="' + post.id + '" data-dir="up" title="Upvote">' +
            '<i class="fas fa-arrow-up"></i>' +
          "</button>" +
          '<span class="vote-count" id="vote-' + post.id + '">' + hub.formatNumber(post.upvotes) + "</span>" +
          '<button class="vote-btn downvote-btn" data-id="' + post.id + '" data-dir="down" title="Downvote">' +
            '<i class="fas fa-arrow-down"></i>' +
          "</button>" +
        "</div>" +
        '<div class="post-content">' +
          '<div class="post-meta">' +
            '<a href="community.html?c=' + post.communityKey + '">' + post.community + "</a>" +
            "<span>&bull;</span>" +
            '<span>Posted by <a href="#">u/' + post.author + "</a></span>" +
            "<span>&bull;</span>" +
            "<span>" + post.time + "</span>" +
            (post.pinned ? '<span class="tag" style="background:#fdcb6e;color:#2d3436"><i class="fas fa-thumbtack"></i> Pinned</span>' : "") +
          "</div>" +
          '<h2 class="post-title">' +
            '<a href="post.html?id=' + post.id + '">' + hub.escapeHtml(post.title) + "</a>" +
          "</h2>" +
          (post.body ? '<div class="post-body-preview">' + hub.escapeHtml(post.body.substring(0, 200)) + (post.body.length > 200 ? "..." : "") + "</div>" : "") +
          (tags ? '<div class="post-tags">' + tags + "</div>" : "") +
          '<div class="post-actions">' +
            '<button class="action-btn"><i class="fas fa-comment"></i> ' + hub.formatNumber(post.comments) + " Comments</button>" +
            '<button class="action-btn share-btn"><i class="fas fa-share"></i> Share</button>' +
            '<button class="action-btn save-btn"><i class="fas fa-bookmark"></i> Save</button>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  };

  hub.renderPosts = function (container, postList) {
    if (!container) return;
    container.innerHTML = postList.map(hub.renderPostCard).join("");
    hub.attachVoteListeners(container);
  };

  hub.attachVoteListeners = function (container) {
    container.querySelectorAll(".vote-btn").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var id = parseInt(btn.dataset.id);
        var dir = btn.dataset.dir;
        var post = hub.state.posts.find(function (p) { return p.id === id; });
        if (!post) return;

        var card = btn.closest(".vote-column");
        var upBtn = card.querySelector(".upvote-btn");
        var downBtn = card.querySelector(".downvote-btn");
        var countEl = card.querySelector(".vote-count");

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
        countEl.textContent = hub.formatNumber(post.upvotes);
      });
    });
  };

  hub.initSort = function () {
    $$(".sort-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        $$(".sort-btn").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var sort = btn.dataset.sort;
        var sorted = [].concat(hub.state.posts);
        if (sort === "hot") sorted.sort(function (a, b) { return (b.upvotes + b.comments * 3) - (a.upvotes + a.comments * 3); });
        else if (sort === "new") sorted = [].concat(hub.state.posts).reverse();
        else if (sort === "top") sorted.sort(function (a, b) { return b.upvotes - a.upvotes; });
        var container = $("#posts-container");
        hub.renderPosts(container, sorted);
      });
    });
  };

  hub.initSearch = function () {
    var input = $("#search-input");
    if (!input) return;
    var debounce;
    input.addEventListener("input", function () {
      clearTimeout(debounce);
      debounce = setTimeout(function () {
        var q = input.value.toLowerCase().trim();
        var container = $("#posts-container");
        if (!q) {
          hub.renderPosts(container, hub.state.posts);
          return;
        }
        var filtered = hub.state.posts.filter(function (p) {
          return (
            p.title.toLowerCase().includes(q) ||
            (p.body && p.body.toLowerCase().includes(q)) ||
            p.community.toLowerCase().includes(q) ||
            (p.tags && p.tags.some(function (t) { return t.toLowerCase().includes(q); }))
          );
        });
        hub.renderPosts(container, filtered);
      }, 300);
    });
  };
})(window.OpenHub);
