import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);
  
  // Handle scroll changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 backdrop-blur-md bg-dark-bg/80 border-b border-dark-accent/50' : 'py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display text-xl font-bold tracking-tight relative z-10 flex items-center gap-2"
          data-cursor="pointer"
        >
          <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>NETFLUENCE</span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `relative text-sm font-medium uppercase transition-all group
                ${isActive ? 'text-accent' : 'text-white/70 hover:text-white'}`
              }
              data-cursor="pointer"
            >
              {({ isActive }) => (
                <>
                  <span className="relative overflow-hidden block">
                    {item.label}
                    {/* Animated underline on hover */}
                    <span className={`absolute left-0 bottom-0 w-full h-[2px] transform 
                      ${isActive ? 'bg-accent' : 'bg-white/60 scale-x-0 group-hover:scale-x-100'}
                      transition-transform duration-300 origin-left`}>
                    </span>
                  </span>
                  
                  {/* Hover dot indicator */}
                  <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                </>
              )}
            </NavLink>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="ml-2 w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Toggle dark mode"
            data-cursor="pointer"
          >
            <div className="relative w-5 h-5">
              <motion.div 
                animate={{ 
                  rotate: isDarkMode ? 0 : 180,
                  opacity: isDarkMode ? 1 : 0 
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </motion.div>
              <motion.div 
                animate={{ 
                  rotate: isDarkMode ? -180 : 0,
                  opacity: isDarkMode ? 0 : 1
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </motion.div>
            </div>
          </button>
          
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get Started
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/contact" className="btn btn-primary btn-sm hidden sm:flex">
            Get Started
          </Link>
          
          <button 
            className="relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-cursor="pointer"
          >
            <div className="w-6 flex flex-col items-end justify-center space-y-1.5">
              <motion.span 
                animate={{
                  width: menuOpen ? '100%' : '100%',
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 9 : 0
                }}
                className="block h-px bg-current"
              />
              <motion.span 
                animate={{
                  width: menuOpen ? '100%' : '75%',
                  opacity: menuOpen ? 0 : 1
                }}
                className="block h-px bg-current"
              />
              <motion.span 
                animate={{
                  width: menuOpen ? '100%' : '50%',
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -9 : 0
                }}
                className="block h-px bg-current"
              />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass"
          >
            <div className="container py-8">
              <nav className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                      `text-2xl font-semibold transition-all ${
                        isActive ? 'text-accent' : 'text-white/70 hover:text-white'
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
                
                <div className="pt-4 flex flex-col gap-4">
                  <button 
                    onClick={toggleTheme}
                    className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
                  >
                    <span className="text-sm uppercase">
                      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </span>
                    <div className="w-10 h-5 bg-dark-accent rounded-full p-0.5 flex items-center">
                      <motion.div 
                        animate={{ 
                          x: isDarkMode ? 0 : 20
                        }}
                        className="w-4 h-4 bg-white rounded-full"
                      />
                    </div>
                  </button>
                  
                  <Link 
                    to="/contact" 
                    className="btn btn-primary w-full sm:hidden"
                    onClick={() => setMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Navigation items
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' }
];

export default Header; 