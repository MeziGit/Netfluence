import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import CustomCursor from "./components/ui/CustomCursor";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Loading fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
  </div>
);

// Main App Component
const App = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  // Check if browser is Safari
  useEffect(() => {
    // Safari detection
    const isSafariBrowser = () => {
      const ua = navigator.userAgent.toLowerCase();
      return (
        ua.indexOf("safari") !== -1 &&
        ua.indexOf("chrome") === -1 &&
        ua.indexOf("android") === -1
      );
    };

    setIsSafari(isSafariBrowser());

    // Add safari class to html for specific CSS optimizations
    if (isSafariBrowser()) {
      document.documentElement.classList.add("safari-browser");
    }
  }, []);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Add mobile class to body to disable animations via CSS
      if (mobile) {
        document.body.classList.add("mobile-device");
      } else {
        document.body.classList.remove("mobile-device");
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Disable scroll animations globally on mobile
    if (!isMobile) {
      // Only load locomotive scroll on desktop
      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href =
        "https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css";
      document.head.appendChild(linkElement);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} ${isSafari ? "safari" : ""}`}
    >
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main id="main-content" className="transition-all duration-300">
          <Suspense fallback={<PageLoader />}>
            {isMobile || isSafari ? (
              // Regular routing without animations on mobile or Safari
              <Routes>
                <Route path="/" element={<HomePage isMobile={isMobile} />} />
                <Route
                  path="/services"
                  element={<ServicesPage isMobile={isMobile} />}
                />
                <Route
                  path="/portfolio"
                  element={<PortfolioPage isMobile={isMobile} />}
                />
                <Route
                  path="/about"
                  element={<AboutPage isMobile={isMobile} />}
                />
                <Route
                  path="/contact"
                  element={<ContactPage isMobile={isMobile} />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            ) : (
              // Animated transitions only on desktop Chrome/Firefox
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<HomePage isMobile={isMobile} />} />
                  <Route
                    path="/services"
                    element={<ServicesPage isMobile={isMobile} />}
                  />
                  <Route
                    path="/portfolio"
                    element={<PortfolioPage isMobile={isMobile} />}
                  />
                  <Route
                    path="/about"
                    element={<AboutPage isMobile={isMobile} />}
                  />
                  <Route
                    path="/contact"
                    element={<ContactPage isMobile={isMobile} />}
                  />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </AnimatePresence>
            )}
          </Suspense>
        </main>
        <Footer />
      </div>
      {!isMobile && !isSafari && (
        <>
          <div
            id="custom-cursor"
            className="custom-cursor hidden md:block"
          ></div>
          <CustomCursor />
        </>
      )}
    </div>
  );
};

export default App;
