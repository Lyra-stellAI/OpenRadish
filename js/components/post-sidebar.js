// ===== COMPONENT: POST DETAIL RIGHT SIDEBAR =====
// Renders the community info card on the post detail page.

(function (hub) {
  "use strict";

  hub.renderPostSidebar = function (communityData) {
    var root = document.getElementById("sidebar-right-root");
    if (!root) return;

    var name = communityData ? communityData.name : "h/MachineLearning";
    var desc = communityData ? communityData.description : "A place to discuss machine learning.";

    root.innerHTML =
      '<div class="card">' +
        '<h4>' + name + '</h4>' +
        '<p>' + desc + '</p>' +
        '<button class="btn btn-primary btn-block">Join Community</button>' +
      '</div>';
  };
})(window.OpenHub);
