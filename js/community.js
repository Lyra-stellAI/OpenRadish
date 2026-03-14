// ===== OPENHUB — COMMUNITY PAGE MODULE =====
// Handles: community banner, sidebar info, rules, mods, join button, filtered posts

(function (hub) {
  "use strict";

  var $ = hub.$;

  hub.initCommunityPage = function () {
    var banner = $("#community-banner");
    if (!banner) return;

    var params = new URLSearchParams(window.location.search);
    var key = params.get("c") || "machinelearning";
    var community = COMMUNITIES[key];

    if (!community) return;

    document.title = community.name + " — Openhub";

    // Populate banner
    var iconEl = $("#community-icon");
    var nameEl = $("#community-name");
    var taglineEl = $("#community-tagline");
    if (iconEl) iconEl.innerHTML = '<i class="fas ' + community.icon + '"></i>';
    if (nameEl) nameEl.textContent = community.name;
    if (taglineEl) taglineEl.textContent = community.tagline;

    // Populate sidebar info
    var descEl = $("#community-description");
    var membersEl = $("#stat-members");
    var onlineEl = $("#stat-online");
    var createdEl = $("#community-created");
    var rulesEl = $("#community-rules");
    var modEl = $("#mod-list");

    if (descEl) descEl.textContent = community.description;
    if (membersEl) membersEl.textContent = community.members;
    if (onlineEl) onlineEl.textContent = community.online;
    if (createdEl) createdEl.textContent = community.created;
    if (rulesEl) rulesEl.innerHTML = community.rules.map(function (r) { return "<li>" + r + "</li>"; }).join("");
    if (modEl) modEl.innerHTML = community.mods.map(function (m) { return '<li><i class="fas fa-shield"></i> u/' + m + "</li>"; }).join("");

    // Join button toggle
    var joinBtn = $("#join-btn");
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

    // Filter and render posts for this community
    var communityPosts = hub.state.posts.filter(function (p) { return p.communityKey === key; });
    var container = $("#posts-container");
    hub.renderPosts(container, communityPosts);
  };
})(window.OpenHub);
