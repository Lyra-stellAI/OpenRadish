// ===== COMPONENT: HOME RIGHT SIDEBAR =====
// Renders welcome card, trending, rules, and footer for the home page.

(function (hub) {
  "use strict";

  hub.renderHomeSidebar = function () {
    var root = document.getElementById("sidebar-right-root");
    if (!root) return;

    root.innerHTML =
      '<div class="card">' +
        '<div class="card-banner"></div>' +
        '<h3>Welcome to Openhub</h3>' +
        '<p>Your home for AI discussion. Join communities, share research, ask questions, and stay on the cutting edge of artificial intelligence.</p>' +
        '<button class="btn btn-primary btn-block" id="create-post-btn">Create Post</button>' +
        '<button class="btn btn-outline btn-block" id="create-community-btn">Create Community</button>' +
      '</div>' +
      '<div class="card">' +
        '<h4>Trending Today</h4>' +
        '<ul class="trending-list" id="trending-list"></ul>' +
      '</div>' +
      '<div class="card">' +
        '<h4>Community Rules</h4>' +
        '<ol class="rules-list">' +
          '<li>Be respectful and constructive</li>' +
          '<li>No spam or self-promotion</li>' +
          '<li>Cite sources for research claims</li>' +
          '<li>Use appropriate flair/tags</li>' +
          '<li>No misinformation</li>' +
        '</ol>' +
      '</div>' +
      '<div class="footer-links">' +
        '<a href="#">About</a><a href="#">Terms</a><a href="#">Privacy</a><a href="#">Contact</a>' +
        '<p>&copy; 2026 Openhub</p>' +
      '</div>';

    // Fill trending
    var list = document.getElementById("trending-list");
    if (list && typeof TRENDING !== "undefined") {
      list.innerHTML = TRENDING.map(function (t) {
        return (
          "<li>" +
            '<div class="trending-community">' + t.community + "</div>" +
            '<div class="trending-title">' + t.title + "</div>" +
            '<div class="trending-community">' + t.upvotes + " upvotes</div>" +
          "</li>"
        );
      }).join("");
    }
  };
})(window.OpenHub);
