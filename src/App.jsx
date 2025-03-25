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
// Only import locomotive scroll CSS when needed - will be loaded dynamically

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
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Conditionally load Locomotive Scroll only on desktop
    if (!isMobile) {
      // Dynamically import Locomotive Scroll CSS
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = 'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css';
      document.head.appendChild(linkElement);
      
      // Could also dynamically import the JS if needed
      // But that would require restructuring the application
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div className="app-container">
        <Header />
        
        <main>
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