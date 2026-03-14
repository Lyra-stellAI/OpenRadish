// ===== OPENHUB — POST DETAIL & COMMENTS MODULE =====

(function (hub) {
  "use strict";

  var $ = hub.$;

  function renderComment(comment, nested) {
    var replies = (comment.replies || []).map(function (r) { return renderComment(r, true); }).join("");
    return (
      '<div class="comment ' + (nested ? "nested" : "") + '">' +
        '<div class="comment-header">' +
          '<span class="comment-author">u/' + comment.author + "</span>" +
          '<span class="comment-time">' + comment.time + "</span>" +
        "</div>" +
        '<div class="comment-body">' + hub.escapeHtml(comment.body) + "</div>" +
        '<div class="comment-actions">' +
          '<button class="comment-vote-up" data-id="' + comment.id + '"><i class="fas fa-arrow-up"></i> ' + comment.upvotes + "</button>" +
          '<button><i class="fas fa-reply"></i> Reply</button>' +
          '<button><i class="fas fa-share"></i> Share</button>' +
        "</div>" +
        replies +
      "</div>"
    );
  }

  function renderComments() {
    var container = $("#comments-container");
    var countEl = $("#comment-count");
    if (!container) return;
    if (countEl) countEl.textContent = SAMPLE_COMMENTS.length + " Comments";
    container.innerHTML = SAMPLE_COMMENTS.map(function (c) { return renderComment(c, false); }).join("");
    attachCommentVotes(container);
  }

  function attachCommentVotes(container) {
    container.querySelectorAll(".comment-vote-up").forEach(function (btn) {
      btn.addEventListener("click", function () {
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
    var submitBtn = $("#comment-submit");
    var input = $("#comment-input");
    if (!submitBtn || !input) return;

    submitBtn.addEventListener("click", function () {
      var body = input.value.trim();
      if (!body) return;

      var newComment = {
        id: Date.now(),
        author: hub.state.currentUser || "anonymous",
        body: body,
        upvotes: 1,
        time: "just now",
        replies: [],
      };

      SAMPLE_COMMENTS.unshift(newComment);
      renderComments();
      input.value = "";
    });
  }

  hub.initPostDetail = function () {
    var container = $("#post-detail");
    if (!container) return;

    var params = new URLSearchParams(window.location.search);
    var postId = parseInt(params.get("id"));
    var post = hub.state.posts.find(function (p) { return p.id === postId; });

    if (!post) {
      container.innerHTML = "<p>Post not found.</p>";
      return;
    }

    document.title = post.title + " — Openhub";

    var tags = (post.tags || []).map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("");
    container.innerHTML =
      '<div class="post-meta">' +
        '<a href="community.html?c=' + post.communityKey + '">' + post.community + "</a>" +
        "<span>&bull;</span>" +
        '<span>Posted by <a href="#">u/' + post.author + "</a></span>" +
        "<span>&bull;</span>" +
        "<span>" + post.time + "</span>" +
      "</div>" +
      '<h1 class="post-title">' + hub.escapeHtml(post.title) + "</h1>" +
      (tags ? '<div class="post-tags">' + tags + "</div>" : "") +
      '<div class="post-body-full">' + hub.escapeHtml(post.body || "").replace(/\n/g, "<br>") + "</div>" +
      '<div class="vote-row">' +
        '<button class="vote-btn upvote-btn" data-id="' + post.id + '" data-dir="up"><i class="fas fa-arrow-up"></i></button>' +
        '<span class="vote-count" id="vote-' + post.id + '">' + hub.formatNumber(post.upvotes) + "</span>" +
        '<button class="vote-btn downvote-btn" data-id="' + post.id + '" data-dir="down"><i class="fas fa-arrow-down"></i></button>' +
        '<span style="margin-left:16px" class="action-btn"><i class="fas fa-comment"></i> ' + hub.formatNumber(post.comments) + " Comments</span>" +
        '<button class="action-btn share-btn"><i class="fas fa-share"></i> Share</button>' +
        '<button class="action-btn save-btn"><i class="fas fa-bookmark"></i> Save</button>' +
      "</div>";

    // Vote on detail page
    container.querySelectorAll(".vote-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var dir = btn.dataset.dir;
        var row = btn.closest(".vote-row");
        var upBtn = row.querySelector(".upvote-btn");
        var downBtn = row.querySelector(".downvote-btn");
        var countEl = row.querySelector(".vote-count");

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
        countEl.textContent = hub.formatNumber(post.upvotes);
      });
    });

    // Community sidebar
    var communityData = COMMUNITIES[post.communityKey];
    if (hub.renderPostSidebar) {
      hub.renderPostSidebar(communityData);
    }

    renderComments();
    initCommentForm(post);
  };
})(window.OpenHub);
