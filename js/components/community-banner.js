// ===== COMPONENT: COMMUNITY BANNER =====
// Renders the community header banner with icon, name, tagline, and join button.

(function (hub) {
  "use strict";

  hub.renderCommunityBanner = function (community) {
    var root = document.getElementById("community-banner-root");
    if (!root || !community) return;

    root.innerHTML =
      '<div class="community-banner" id="community-banner">' +
        '<div class="community-banner-bg"></div>' +
        '<div class="community-banner-info">' +
          '<div class="community-icon"><i class="fas ' + community.icon + '"></i></div>' +
          '<div>' +
            '<h1>' + community.name + '</h1>' +
            '<p>' + community.tagline + '</p>' +
          '</div>' +
          '<button class="btn btn-primary" id="join-btn">Join</button>' +
        '</div>' +
      '</div>';

    // Join toggle
    var joinBtn = document.getElementById("join-btn");
    if (joinBtn) {
      joinBtn.addEventListener("click", function () {
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
  };
})(window.OpenHub);
