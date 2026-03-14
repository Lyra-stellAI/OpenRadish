// ===== COMPONENT: AUTH MODAL =====
// Shared across all pages. Renders login/signup modal + binds events.

(function (hub) {
  "use strict";

  hub.renderAuthModal = function () {
    var root = document.getElementById("auth-modal-root");
    if (!root) return;

    root.innerHTML =
      '<div class="modal-overlay" id="auth-overlay">' +
        '<div class="modal modal-sm" id="auth-modal">' +
          '<div class="modal-header">' +
            '<h3 id="auth-title">Log In</h3>' +
            '<button class="icon-btn modal-close" id="auth-close"><i class="fas fa-times"></i></button>' +
          '</div>' +
          '<div class="modal-body">' +
            '<input type="text" class="input" id="auth-username" placeholder="Username">' +
            '<input type="password" class="input" id="auth-password" placeholder="Password">' +
            '<input type="email" class="input hidden" id="auth-email" placeholder="Email">' +
          '</div>' +
          '<div class="modal-footer">' +
            '<button class="btn btn-primary btn-block" id="auth-submit">Log In</button>' +
            '<p class="auth-switch">Don\'t have an account? <a href="#" id="auth-toggle">Sign Up</a></p>' +
          '</div>' +
        '</div>' +
      '</div>';

    // Bind events
    var $ = hub.$;
    var overlay = $("#auth-overlay");
    var closeBtn = $("#auth-close");
    var loginBtn = $("#login-btn");
    var signupBtn = $("#signup-btn");
    var toggleLink = $("#auth-toggle");
    var titleEl = $("#auth-title");
    var emailField = $("#auth-email");
    var submitBtn = $("#auth-submit");
    var isSignup = false;

    function openAuth(signup) {
      isSignup = signup;
      if (titleEl) titleEl.textContent = signup ? "Sign Up" : "Log In";
      if (emailField) emailField.classList.toggle("hidden", !signup);
      if (submitBtn) submitBtn.textContent = signup ? "Sign Up" : "Log In";
      if (toggleLink) toggleLink.textContent = signup ? "Log In" : "Sign Up";
      if (overlay) overlay.classList.add("active");
    }
    function closeAuth() {
      if (overlay) overlay.classList.remove("active");
    }

    if (loginBtn) loginBtn.addEventListener("click", function () { openAuth(false); });
    if (signupBtn) signupBtn.addEventListener("click", function () { openAuth(true); });
    if (closeBtn) closeBtn.addEventListener("click", closeAuth);
    if (overlay) overlay.addEventListener("click", function (e) { if (e.target === overlay) closeAuth(); });
    if (toggleLink) {
      toggleLink.addEventListener("click", function (e) {
        e.preventDefault();
        openAuth(!isSignup);
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener("click", function () {
        var username = ($("#auth-username") || {}).value || "";
        if (!username.trim()) { alert("Please enter a username."); return; }
        hub.state.currentUser = username.trim();
        closeAuth();
        // Update navbar buttons
        if (loginBtn) {
          loginBtn.textContent = "u/" + hub.state.currentUser;
          loginBtn.classList.remove("btn-outline");
          loginBtn.classList.add("btn-primary");
        }
        if (signupBtn) signupBtn.classList.add("hidden");
      });
    }
  };
})(window.OpenHub);
