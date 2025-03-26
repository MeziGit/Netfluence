import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Our Work' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveLink(id);
      if (isMobileMenuOpen) {
        toggleMobileMenu();
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/95 backdrop-blur-md border-b border-white/10' : 'bg-dark-bg/50 backdrop-blur-sm'
      } min-h-[70px] md:min-h-[90px]`}
    >
      <div className="container mx-auto px-5 md:px-16 flex items-center justify-between h-full min-h-[70px] md:min-h-[90px] py-2 md:py-0">
        {/* Logo */}
        <div className="relative z-10 flex items-center py-1">
          <span className="text-2xl md:text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Netfluence
          </span>
          <div className="h-3 w-3 bg-accent rounded-full ml-1 animate-pulse-slow"></div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`nav-link text-base font-medium transition-colors duration-300 ${
                activeLink === link.id ? 'text-accent' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a 
            href="#contact" 
            className="button-effect button-3d bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-md text-base font-medium transition-all duration-300"
          >
            Get Started
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10 text-gray-100 focus:outline-none p-2 -mr-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="w-8 flex flex-col justify-center items-end">
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-8 rounded-sm ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-8 rounded-sm ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-md transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-2xl font-medium transition-colors duration-300 nav-link ${
                  activeLink === link.id ? 'text-accent' : 'text-gray-200 hover:text-white'
                } transform transition-transform duration-300 hover:scale-110`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </button>
            ))}
            <a 
              href="#contact" 
              className="button-effect button-3d bg-accent hover:bg-accent-light text-white px-10 py-4 rounded-md text-xl font-medium transition-all duration-300 mt-6"
              onClick={() => {
                scrollToSection('contact');
                toggleMobileMenu();
              }}
            >
              Get Started
            </a>
          </nav>
          
          {/* Social Links */}
          <div className="mt-12 flex items-center space-x-6">
            <a href="https://twitter.com/netfluence" className="text-gray-400 hover:text-accent transition-colors duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/netfluenceinc/" className="text-gray-400 hover:text-accent transition-colors duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://linkedin.com/company/netfluence" className="text-gray-400 hover:text-accent transition-colors duration-300">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://facebook.com/netfluence" className="text-gray-400 hover:text-accent transition-colors duration-300">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
          </div>
          
          <div className="absolute bottom-8 text-center">
            <p className="text-gray-400 text-sm">
              <i className="fas fa-envelope mr-2"></i> info@netfluence.ca
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <i className="fas fa-phone mr-2"></i> 514-792-7781
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 