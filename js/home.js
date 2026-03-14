// ===== OPENHUB — HOME PAGE MODULE (trending, create post) =====

(function (hub) {
  "use strict";

  var $ = hub.$;
  var $$ = hub.$$;

  hub.renderTrending = function () {
    var list = $("#trending-list");
    if (!list || typeof TRENDING === "undefined") return;
    list.innerHTML = TRENDING.map(function (t) {
      return (
        "<li>" +
          '<div class="trending-community">' + t.community + "</div>" +
          '<div class="trending-title">' + t.title + "</div>" +
          '<div class="trending-community">' + t.upvotes + " upvotes</div>" +
        "</li>"
      );
    }).join("");
  };

  hub.initCreatePost = function () {
    var triggers = [$("#create-post-trigger"), $("#create-post-btn")];
    var overlay = $("#modal-overlay");
    var closeBtn = $("#modal-close");
    var cancelBtn = $("#modal-cancel");
    var submitBtn = $("#modal-submit");

    function openModal() {
      if (overlay) overlay.classList.add("active");
    }
    function closeModal() {
      if (overlay) overlay.classList.remove("active");
    }

    triggers.forEach(function (t) { if (t) t.addEventListener("click", openModal); });
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", function (e) { if (e.target === overlay) closeModal(); });

    // Post type tabs
    $$(".post-type-tabs .tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        $$(".post-type-tabs .tab").forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        var type = tab.dataset.type;
        var linkInput = $("#post-link");
        var bodyInput = $("#post-body");
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
      submitBtn.addEventListener("click", function () {
        var title = ($("#post-title") || {}).value || "";
        var body = ($("#post-body") || {}).value || "";
        var community = ($("#post-community") || {}).value || "";
        var tagsRaw = ($("#post-tags") || {}).value || "";

        if (!title.trim()) { alert("Please enter a title."); return; }
        if (!community) { alert("Please select a community."); return; }

        var tags = tagsRaw.split(",").map(function (t) { return t.trim(); }).filter(Boolean);
        var communityKey = Object.keys(COMMUNITIES).find(function (k) {
          return COMMUNITIES[k].name === community;
        }) || "machinelearning";

        var newPost = {
          id: hub.state.nextPostId++,
          community: community,
          communityKey: communityKey,
          author: hub.state.currentUser || "anonymous",
          title: title.trim(),
          body: body.trim(),
          tags: tags,
          upvotes: 1,
          comments: 0,
          time: "just now",
          pinned: false,
        };

        hub.state.posts.unshift(newPost);
        var container = $("#posts-container");
        hub.renderPosts(container, hub.state.posts);
        closeModal();

        // Clear form
        if ($("#post-title")) $("#post-title").value = "";
        if ($("#post-body")) $("#post-body").value = "";
        if ($("#post-community")) $("#post-community").value = "";
        if ($("#post-tags")) $("#post-tags").value = "";
      });
    }
  };
})(window.OpenHub);
