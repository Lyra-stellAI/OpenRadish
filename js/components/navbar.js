// ===== COMPONENT: NAVBAR =====
// Shared across all pages. Renders navbar + binds theme toggle & mobile menu.

(function (hub) {
  "use strict";

  hub.renderNavbar = function () {
    var root = document.getElementById("navbar-root");
    if (!root) return;

    root.innerHTML =
      '<header class="navbar">' +
        '<div class="navbar-left">' +
          '<a href="index.html" class="logo">' +
            '<span class="logo-icon">\u2B21</span>' +
            '<span class="logo-text">Open<strong>hub</strong></span>' +
          '</a>' +
        '</div>' +
        '<div class="navbar-center">' +
          '<div class="search-bar">' +
            '<i class="fas fa-search"></i>' +
            '<input type="text" id="search-input" placeholder="Search Openhub" autocomplete="off">' +
          '</div>' +
        '</div>' +
        '<div class="navbar-right">' +
          '<button class="icon-btn" id="theme-toggle" title="Toggle dark mode"><i class="fas fa-moon"></i></button>' +
          '<button class="icon-btn" title="Notifications"><i class="fas fa-bell"></i></button>' +
          '<button class="btn btn-outline" id="login-btn">Log In</button>' +
          '<button class="btn btn-primary" id="signup-btn">Sign Up</button>' +
        '</div>' +
        '<button class="mobile-menu-btn" id="mobile-menu-btn"><i class="fas fa-bars"></i></button>' +
      '</header>';

    // Theme toggle
    var saved = localStorage.getItem("openhub-theme");
    if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
    var btn = document.getElementById("theme-toggle");
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

    // Mobile menu
    var menuBtn = document.getElementById("mobile-menu-btn");
    var sidebar = document.getElementById("sidebar-left");
    if (menuBtn && sidebar) {
      menuBtn.addEventListener("click", function () { sidebar.classList.toggle("open"); });
    }
  };
})(window.OpenHub);
