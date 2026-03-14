// ===== OPENHUB — AUTH MODULE =====

(function (hub) {
  "use strict";

  var $ = hub.$;

  hub.updateUserUI = function () {
    var loginBtn = $("#login-btn");
    var signupBtn = $("#signup-btn");
    if (hub.state.currentUser) {
      if (loginBtn) {
        loginBtn.textContent = "u/" + hub.state.currentUser;
        loginBtn.classList.remove("btn-outline");
        loginBtn.classList.add("btn-primary");
      }
      if (signupBtn) signupBtn.classList.add("hidden");
    }
  };

  hub.initAuth = function () {
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
        hub.updateUserUI();
      });
    }
  };
})(window.OpenHub);
