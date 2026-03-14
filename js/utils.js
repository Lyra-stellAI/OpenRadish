// ===== OPENHUB — SHARED UTILITIES & STATE =====

window.OpenHub = window.OpenHub || {};

(function (hub) {
  "use strict";

  // DOM helpers
  hub.$ = function (sel) { return document.querySelector(sel); };
  hub.$$ = function (sel) { return document.querySelectorAll(sel); };

  // Shared state
  hub.state = {
    currentUser: null,
    posts: typeof SAMPLE_POSTS !== "undefined" ? [...SAMPLE_POSTS] : [],
    nextPostId: typeof SAMPLE_POSTS !== "undefined" ? SAMPLE_POSTS.length + 1 : 1,
  };

  // Format large numbers (1847 → "1.8k")
  hub.formatNumber = function (n) {
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    return String(n);
  };

  // XSS prevention
  hub.escapeHtml = function (str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  };
})(window.OpenHub);
