// ===== COMPONENT: COMMUNITY RIGHT SIDEBAR CARDS =====
// Renders About, Rules, and Moderators cards for the community page.

(function (hub) {
  "use strict";

  hub.renderCommunityCards = function (community) {
    var root = document.getElementById("sidebar-right-root");
    if (!root || !community) return;

    var rulesHtml = community.rules.map(function (r) { return "<li>" + r + "</li>"; }).join("");
    var modsHtml = community.mods.map(function (m) {
      return '<li><i class="fas fa-shield"></i> u/' + m + "</li>";
    }).join("");

    root.innerHTML =
      '<div class="card">' +
        '<h4>About this Community</h4>' +
        '<p>' + community.description + '</p>' +
        '<div class="community-stats">' +
          '<div class="stat"><strong>' + community.members + '</strong><span>Members</span></div>' +
          '<div class="stat"><strong>' + community.online + '</strong><span>Online</span></div>' +
        '</div>' +
        '<p class="community-created">Created ' + community.created + '</p>' +
      '</div>' +
      '<div class="card">' +
        '<h4>Community Rules</h4>' +
        '<ol class="rules-list">' + rulesHtml + '</ol>' +
      '</div>' +
      '<div class="card">' +
        '<h4>Moderators</h4>' +
        '<ul class="mod-list">' + modsHtml + '</ul>' +
      '</div>';
  };
})(window.OpenHub);
