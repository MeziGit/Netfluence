/**
 * Advanced Safari detection cache to avoid repeated detection
 */
let _isSafariCache: boolean | null = null;
let _isMobileCache: boolean | null = null;

/**
 * Detects if the current browser is Safari with more comprehensive checks
 * @returns {boolean} true if the browser is Safari
 */
export const isSafariBrowser = (): boolean => {
  // Use cached result if available to avoid repeated detection
  if (_isSafariCache !== null) return _isSafariCache;

  // Standard user agent detection
  const ua = navigator.userAgent.toLowerCase();
  const isSafariByUA =
    ua.indexOf("safari") !== -1 &&
    ua.indexOf("chrome") === -1 &&
    ua.indexOf("android") === -1;

  // Additional check for Safari-specific features
  const hasSafariAppNameIdentifier =
    /constructor/i.test(window.HTMLElement as any) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof window["safari"] !== "undefined" &&
          window["safari"].pushNotification)
    );

  // CSS-based detection as a fallback
  const isSafariByCSS = (() => {
    try {
      const style = document.createElement("div").style;
      style.webkitTransition = "";
      return "webkitTransition" in style;
    } catch (e) {
      return false;
    }
  })();

  // Cache the result
  _isSafariCache = isSafariByUA || hasSafariAppNameIdentifier || isSafariByCSS;
  return _isSafariCache;
};

/**
 * Adds special classes to the HTML element for Safari-specific styles
 */
export const applySafariOptimizations = (): void => {
  if (isSafariBrowser()) {
    document.documentElement.classList.add("safari-browser");

    // Apply additional Safari-specific optimizations
    document.documentElement.style.setProperty(
      "--safari-transform",
      "translateZ(0)"
    );
    document.documentElement.style.setProperty("--safari-backface", "hidden");

    // Add specific styles for Safari cursor handling
    const style = document.createElement("style");
    style.innerHTML = `
      #custom-cursor {
        will-change: transform !important;
        -webkit-transform: translateZ(0) !important;
        transform: translate3d(0, 0, 0) !important;
        -webkit-backface-visibility: hidden !important;
        contain: strict;
      }
    `;
    document.head.appendChild(style);
  }
};

/**
 * Checks if the device is mobile based on screen width and user agent
 * @returns {boolean} true if the device is mobile
 */
export const isMobileDevice = (): boolean => {
  // Use cached result if available
  if (_isMobileCache !== null) return _isMobileCache;

  // Screen size check
  const isMobileBySize = window.innerWidth < 768;

  // User agent check for common mobile identifiers
  const isMobileByUA =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  // Touch capability check
  const isMobileByTouch =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  // Cache the result
  _isMobileCache = isMobileBySize || (isMobileByUA && isMobileByTouch);
  return _isMobileCache;
};

/**
 * Resets detection caches when window is resized
 */
export const resetDetectionCache = () => {
  _isMobileCache = null;
  // Don't reset Safari cache as browser type doesn't change on resize
};

/**
 * Applies mobile-specific optimizations
 * @returns {boolean} true if the device is mobile
 */
export const applyMobileOptimizations = (): boolean => {
  const isMobile = isMobileDevice();

  if (isMobile) {
    document.body.classList.add("mobile-device");

    // Apply additional mobile optimizations
    const style = document.createElement("style");
    style.innerHTML = `
      .animate-pulse, .animate-spin, .animate-ping, .blur-3xl, .blur-2xl, .blur-xl {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        filter: none !important;
        opacity: 0.3 !important;
      }
    `;
    document.head.appendChild(style);
  } else {
    document.body.classList.remove("mobile-device");
  }

  return isMobile;
};

/**
 * Sets up event listeners for responsive detection
 */
export const setupResponsiveDetection = (): void => {
  window.addEventListener(
    "resize",
    () => {
      resetDetectionCache();
      applyMobileOptimizations();
    },
    { passive: true }
  );
};

/**
 * Optimizes rendering based on device and browser
 * @returns {Object} Device and browser information
 */
export const optimizeRendering = (): {
  isMobile: boolean;
  isSafari: boolean;
} => {
  const isMobile = applyMobileOptimizations();
  const isSafari = isSafariBrowser();

  if (isSafari) {
    applySafariOptimizations();
  }

  // Setup responsive detection only once
  if (typeof window !== "undefined" && !window["__responsiveDetectionSetup"]) {
    setupResponsiveDetection();
    window["__responsiveDetectionSetup"] = true;
  }

  return { isMobile, isSafari };
};
