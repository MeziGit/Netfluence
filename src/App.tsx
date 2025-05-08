import { lazy, Suspense, useContext, useEffect, useState, memo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import CustomCursor from "./components/ui/CustomCursor";
import { optimizeRendering } from "./utils/browserDetection";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Loading fallback (memoized to prevent re-renders)
const PageLoader = memo(() => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
  </div>
));

PageLoader.displayName = "PageLoader";

// Memoized cursor implementation to prevent re-renders
const CursorImplementation = memo(
  ({ isMobile, isSafari }: { isMobile: boolean; isSafari: boolean }) => {
    // Don't use custom cursor on mobile or Safari
    if (isMobile || isSafari) return null;

    return (
      <>
        <div id="custom-cursor"></div>
        <CustomCursor />
      </>
    );
  }
);

CursorImplementation.displayName = "CursorImplementation";

// Memoized route components to prevent re-renders
const RegularRoutes = memo(
  ({ isMobile, isSafari }: { isMobile: boolean; isSafari: boolean }) => (
    <Routes>
      <Route
        path="/"
        element={<HomePage isMobile={isMobile} isSafari={isSafari} />}
      />
      <Route
        path="/services"
        element={<ServicesPage isMobile={isMobile} isSafari={isSafari} />}
      />
      <Route
        path="/portfolio"
        element={<PortfolioPage isMobile={isMobile} isSafari={isSafari} />}
      />
      <Route
        path="/about"
        element={<AboutPage isMobile={isMobile} isSafari={isSafari} />}
      />
      <Route
        path="/contact"
        element={<ContactPage isMobile={isMobile} isSafari={isSafari} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
);

RegularRoutes.displayName = "RegularRoutes";

// Main App Component
const App = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  // Use the browser detection utility with optimized handling
  useEffect(() => {
    // Apply optimizations immediately
    const { isMobile: detectedMobile, isSafari: detectedSafari } =
      optimizeRendering();
    setIsMobile(detectedMobile);
    setIsSafari(detectedSafari);

    // Apply Safari-specific preload optimizations if needed
    if (detectedSafari) {
      // Preload critical Safari resources with higher priority
      document.documentElement.classList.add("safari");

      // Disable unnecessary animations to improve performance
      const disableMotion = document.createElement("style");
      disableMotion.textContent = `
        @media not all and (min-resolution:.001dpcm) { 
          @supports (-webkit-appearance:none) {
            .framer-motion-animations {
              transform: translateZ(0) !important;
              will-change: transform !important;
              -webkit-backface-visibility: hidden !important;
            }
          }
        }
      `;
      document.head.appendChild(disableMotion);
    }

    // Conditionally load locomotive scroll only for desktop
    if (!detectedMobile) {
      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href =
        "https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css";
      document.head.appendChild(linkElement);
    }

    // Add resize listener - optimized to not cause re-renders
    const handleResize = () => {
      const { isMobile: detected } = optimizeRendering();
      if (detected !== isMobile) {
        setIsMobile(detected);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Create memoized animations for efficient rendering
  const AnimatedRoutes = memo(() => (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<HomePage isMobile={isMobile} isSafari={isSafari} />}
        />
        <Route
          path="/services"
          element={<ServicesPage isMobile={isMobile} isSafari={isSafari} />}
        />
        <Route
          path="/portfolio"
          element={<PortfolioPage isMobile={isMobile} isSafari={isSafari} />}
        />
        <Route
          path="/about"
          element={<AboutPage isMobile={isMobile} isSafari={isSafari} />}
        />
        <Route
          path="/contact"
          element={<ContactPage isMobile={isMobile} isSafari={isSafari} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  ));

  AnimatedRoutes.displayName = "AnimatedRoutes";

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} ${isSafari ? "safari" : ""}`}
    >
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
            {isMobile || isSafari ? (
              // Regular routing without animations on mobile or Safari
              <RegularRoutes isMobile={isMobile} isSafari={isSafari} />
            ) : (
              // Animated transitions only on desktop Chrome/Firefox
              <AnimatedRoutes />
            )}
          </Suspense>
        </main>
        <Footer />
      </div>
      <CursorImplementation isMobile={isMobile} isSafari={isSafari} />
    </div>
  );
};

export default memo(App);
