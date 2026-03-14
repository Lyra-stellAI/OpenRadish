// ===== OPENHUB — THEME & MOBILE MENU MODULE =====

(function (hub) {
  "use strict";

  var $ = hub.$;

  hub.initTheme = function () {
    var saved = localStorage.getItem("openhub-theme");
    if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
    var btn = $("#theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var isDark = document.documentElement.getAttribute("data-theme") === "dark";
        if (isDark) {
          document.documentElement.removeAttribute("data-theme");
          localStorage.setItem("openhub-theme", "light");
          btn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
          document.documentElement.setAttribute("data-theme", "dark");
          localStorage.setItem("openhub-theme", "dark");
          btn.innerHTML = '<i class="fas fa-sun"></i>';
        }
      });
      if (localStorage.getItem("openhub-theme") === "dark") {
        btn.innerHTML = '<i class="fas fa-sun"></i>';
      }
    }
  };

  hub.initMobileMenu = function () {
    var btn = $("#mobile-menu-btn");
    var sidebar = $("#sidebar-left");
    if (btn && sidebar) {
      btn.addEventListener("click", function () { sidebar.classList.toggle("open"); });
    }
  };
})(window.OpenHub);
