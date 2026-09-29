import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";

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
    // Add mobile class to body to disable animations via CSS
    const checkMobile = () => {
      document.body.classList.toggle("mobile-device", window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // One route tree for every device: pages are pre-rendered, and swapping trees after
  // detecting the device would remount the page and replay its load animation.
  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} ${isSafari ? "safari" : ""}`}
    >
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main id="main-content" className="transition-all duration-300">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
