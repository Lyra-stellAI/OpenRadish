// ===== COMPONENT: LEFT SIDEBAR =====
// Shared across pages. Pass variant: "full" (index) or "simple" (community).

(function (hub) {
  "use strict";

  var fullSidebar =
    '<aside class="sidebar sidebar-left" id="sidebar-left">' +
      '<nav class="sidebar-nav">' +
        '<h4 class="sidebar-heading">Feeds</h4>' +
        '<a href="#" class="sidebar-link active"><i class="fas fa-fire"></i> Hot</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-bolt"></i> New</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-chart-line"></i> Top</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-arrow-trend-up"></i> Rising</a>' +
      '</nav>' +
      '<nav class="sidebar-nav">' +
        '<h4 class="sidebar-heading">Communities</h4>' +
        '<a href="community.html?c=machinelearning" class="sidebar-link"><i class="fas fa-brain"></i> h/MachineLearning</a>' +
        '<a href="community.html?c=llms" class="sidebar-link"><i class="fas fa-robot"></i> h/LLMs</a>' +
        '<a href="community.html?c=computervision" class="sidebar-link"><i class="fas fa-eye"></i> h/ComputerVision</a>' +
        '<a href="community.html?c=nlp" class="sidebar-link"><i class="fas fa-language"></i> h/NLP</a>' +
        '<a href="community.html?c=ethics" class="sidebar-link"><i class="fas fa-scale-balanced"></i> h/AIethics</a>' +
        '<a href="community.html?c=opensource" class="sidebar-link"><i class="fas fa-code-branch"></i> h/OpenSource</a>' +
        '<a href="community.html?c=research" class="sidebar-link"><i class="fas fa-flask"></i> h/AIResearch</a>' +
        '<a href="community.html?c=beginners" class="sidebar-link"><i class="fas fa-graduation-cap"></i> h/Beginners</a>' +
      '</nav>' +
      '<nav class="sidebar-nav">' +
        '<h4 class="sidebar-heading">Resources</h4>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-book"></i> Wiki</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-calendar"></i> Events</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-briefcase"></i> Jobs Board</a>' +
      '</nav>' +
    '</aside>';

  var simpleSidebar =
    '<aside class="sidebar sidebar-left" id="sidebar-left">' +
      '<nav class="sidebar-nav">' +
        '<h4 class="sidebar-heading">Navigation</h4>' +
        '<a href="index.html" class="sidebar-link"><i class="fas fa-home"></i> Home</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-fire"></i> Hot</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-bolt"></i> New</a>' +
      '</nav>' +
    '</aside>';

  hub.renderSidebarLeft = function (variant) {
    var root = document.getElementById("sidebar-left-root");
    if (!root) return;
    root.innerHTML = (variant === "full") ? fullSidebar : simpleSidebar;
  };
})(window.OpenHub);
