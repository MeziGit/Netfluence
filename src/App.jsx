import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider, { ThemeContext } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import CustomCursor from './components/ui/CustomCursor';

// Styles
import './styles/globals.css';
// Locomotive scroll CSS - not imported by default

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Main App Content
const AppContent = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Function to check for mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Add/remove mobile-device class
      if (mobile) {
        document.documentElement.classList.add('mobile-device');
        
        // Prevent flickering on initial load
        document.documentElement.classList.add('render-stable');
        setTimeout(() => {
          document.documentElement.classList.remove('render-stable');
        }, 300);
      } else {
        document.documentElement.classList.remove('mobile-device');
      }
    };
    
    // Check on mount
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Disable scroll animations globally on mobile
    if (!isMobile) {
      // Only load locomotive scroll on desktop
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = 'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css';
      document.head.appendChild(linkElement);
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div className="app-container">
        <Header />
        
        <main>
          {isMobile ? (
            // Regular routing without animations on mobile
            <Routes>
              <Route path="/" element={<HomePage isMobile={isMobile} />} />
              <Route path="/services" element={<ServicesPage isMobile={isMobile} />} />
              <Route path="/portfolio" element={<PortfolioPage isMobile={isMobile} />} />
              <Route path="/about" element={<AboutPage isMobile={isMobile} />} />
              <Route path="/contact" element={<ContactPage isMobile={isMobile} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          ) : (
            // Animated transitions only on desktop
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage isMobile={isMobile} />} />
                <Route path="/services" element={<ServicesPage isMobile={isMobile} />} />
                <Route path="/portfolio" element={<PortfolioPage isMobile={isMobile} />} />
                <Route path="/about" element={<AboutPage isMobile={isMobile} />} />
                <Route path="/contact" element={<ContactPage isMobile={isMobile} />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </AnimatePresence>
          )}
        </main>
        
        <Footer />
      </div>
      {!isMobile && <CustomCursor />}
    </div>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <AppContent />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App; 