// ===== COMPONENT: CREATE POST MODAL =====
// Home page only. Renders create-post box + modal, binds submit logic.

(function (hub) {
  "use strict";

  hub.renderCreatePostBox = function () {
    var root = document.getElementById("create-post-box-root");
    if (!root) return;

    root.innerHTML =
      '<div class="create-post-box">' +
        '<div class="create-post-avatar"><i class="fas fa-user-circle"></i></div>' +
        '<input type="text" class="create-post-input" id="create-post-trigger" placeholder="Create a post" readonly>' +
        '<button class="icon-btn"><i class="fas fa-image"></i></button>' +
        '<button class="icon-btn"><i class="fas fa-link"></i></button>' +
      '</div>';
  };

  hub.renderCreatePostModal = function () {
    var root = document.getElementById("create-post-modal-root");
    if (!root) return;

    root.innerHTML =
      '<div class="modal-overlay" id="modal-overlay">' +
        '<div class="modal" id="create-post-modal">' +
          '<div class="modal-header">' +
            '<h3>Create a Post</h3>' +
            '<button class="icon-btn modal-close" id="modal-close"><i class="fas fa-times"></i></button>' +
          '</div>' +
          '<div class="modal-body">' +
            '<select id="post-community" class="input">' +
              '<option value="">Choose a community</option>' +
              '<option value="h/MachineLearning">h/MachineLearning</option>' +
              '<option value="h/LLMs">h/LLMs</option>' +
              '<option value="h/ComputerVision">h/ComputerVision</option>' +
              '<option value="h/NLP">h/NLP</option>' +
              '<option value="h/AIethics">h/AIethics</option>' +
              '<option value="h/OpenSource">h/OpenSource</option>' +
              '<option value="h/AIResearch">h/AIResearch</option>' +
              '<option value="h/Beginners">h/Beginners</option>' +
            '</select>' +
            '<div class="post-type-tabs">' +
              '<button class="tab active" data-type="text"><i class="fas fa-align-left"></i> Text</button>' +
              '<button class="tab" data-type="link"><i class="fas fa-link"></i> Link</button>' +
              '<button class="tab" data-type="image"><i class="fas fa-image"></i> Image</button>' +
            '</div>' +
            '<input type="text" class="input" id="post-title" placeholder="Title" maxlength="300">' +
            '<textarea class="input textarea" id="post-body" placeholder="What\'s on your mind?"></textarea>' +
            '<input type="text" class="input hidden" id="post-link" placeholder="URL">' +
            '<input type="text" class="input" id="post-tags" placeholder="Tags (comma separated)">' +
          '</div>' +
          '<div class="modal-footer">' +
            '<button class="btn btn-outline" id="modal-cancel">Cancel</button>' +
            '<button class="btn btn-primary" id="modal-submit">Post</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    // Bind events
    var $ = hub.$;
    var $$ = hub.$$;
    var triggers = [$("#create-post-trigger"), $("#create-post-btn")];
    var overlay = $("#modal-overlay");
    var closeBtn = $("#modal-close");
    var cancelBtn = $("#modal-cancel");
    var submitBtn = $("#modal-submit");

    function openModal() { if (overlay) overlay.classList.add("active"); }
    function closeModal() { if (overlay) overlay.classList.remove("active"); }

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
        hub.renderPosts($("#posts-container"), hub.state.posts);
        closeModal();

        if ($("#post-title")) $("#post-title").value = "";
        if ($("#post-body")) $("#post-body").value = "";
        if ($("#post-community")) $("#post-community").value = "";
        if ($("#post-tags")) $("#post-tags").value = "";
      });
    }
  };
})(window.OpenHub);
