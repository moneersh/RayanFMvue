// SSL Certificate and HTTPS enforcement script
// This ensures secure connections and handles SSL certificate issues

(function () {
  "use strict";

  // Force HTTPS redirect
  if (
    location.protocol !== "https:" &&
    location.hostname !== "localhost" &&
    location.hostname !== "127.0.0.1" &&
    location.hostname !== "0.0.0.0"
  ) {
    console.log("Redirecting to HTTPS...");
    location.replace(
      "https:" + window.location.href.substring(window.location.protocol.length)
    );
    return;
  }

  // Check if we're on the correct domain
  const expectedDomain = "rayanfm.net";
  if (
    location.hostname !== expectedDomain &&
    location.hostname !== `www.${expectedDomain}`
  ) {
    console.warn("Unexpected domain:", location.hostname);
  }

  // Verify SSL certificate (basic check)
  if (location.protocol === "https:") {
    console.log("✅ SSL connection established");

    // Add security headers via JavaScript if not set by server
    if (
      !document.querySelector('meta[http-equiv="Strict-Transport-Security"]')
    ) {
      const hstsHeader = document.createElement("meta");
      hstsHeader.setAttribute("http-equiv", "Strict-Transport-Security");
      hstsHeader.setAttribute("content", "max-age=31536000; includeSubDomains");
      document.head.appendChild(hstsHeader);
    }
  }

  // Handle mixed content warnings
  const upgradeInsecureRequests = () => {
    // Convert any HTTP URLs to HTTPS
    const elements = document.querySelectorAll(
      'img[src^="http:"], script[src^="http:"], link[href^="http:"]'
    );
    elements.forEach((el) => {
      if (el.src && el.src.startsWith("http:")) {
        el.src = el.src.replace("http:", "https:");
      }
      if (el.href && el.href.startsWith("http:")) {
        el.href = el.href.replace("http:", "https:");
      }
    });
  };

  // Run after DOM is loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", upgradeInsecureRequests);
  } else {
    upgradeInsecureRequests();
  }

  // Monitor for dynamically added content
  const observer = new MutationObserver(upgradeInsecureRequests);
  observer.observe(document.body, { childList: true, subtree: true });
})();
