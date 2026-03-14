// ===== OPENHUB — APP INIT (orchestrator) =====
// Renders shared components, then initializes page-specific modules.

(function (hub) {
  "use strict";

  function init() {
    var path = window.location.pathname;

    // === SHARED COMPONENTS (all pages) ===
    hub.renderNavbar();
    hub.renderAuthModal();

    // === PAGE-SPECIFIC ===
    if (path.includes("post.html")) {
      // Post detail page — no left sidebar, no sort bar
      hub.initSearch();
      hub.initPostDetail();

    } else if (path.includes("community.html")) {
      // Community page
      hub.renderSidebarLeft("simple");

      var params = new URLSearchParams(window.location.search);
      var key = params.get("c") || "machinelearning";
      var community = COMMUNITIES[key];

      if (community) {
        document.title = community.name + " \u2014 Openhub";
        hub.renderCommunityBanner(community);
        hub.renderCommunityCards(community);
      }

      // Filter and render posts for this community
      var communityPosts = hub.state.posts.filter(function (p) { return p.communityKey === key; });
      hub.renderPosts(hub.$("#posts-container"), communityPosts);
      hub.initSort();
      hub.initSearch();

    } else {
      // Home page
      hub.renderSidebarLeft("full");
      hub.renderHomeSidebar();
      hub.renderCreatePostBox();
      hub.renderCreatePostModal();

      hub.renderPosts(hub.$("#posts-container"), hub.state.posts);
      hub.initSort();
      hub.initSearch();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window.OpenHub);
