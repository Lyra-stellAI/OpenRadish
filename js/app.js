// ===== OPENHUB — APP INIT (orchestrator) =====
// Each module is loaded independently via separate script tags.
// This file simply initializes the correct modules for each page.

(function (hub) {
  "use strict";

  var $ = hub.$;

  function init() {
    // Shared modules — always initialize
    hub.initTheme();
    hub.initMobileMenu();
    hub.initSearch();
    hub.initSort();
    hub.initAuth();

    // Page-specific initialization
    var path = window.location.pathname;

    if (path.includes("post.html")) {
      hub.initPostDetail();
    } else if (path.includes("community.html")) {
      hub.initCommunityPage();
    } else {
      // Home page
      var container = $("#posts-container");
      hub.renderPosts(container, hub.state.posts);
      hub.renderTrending();
      hub.initCreatePost();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window.OpenHub);
