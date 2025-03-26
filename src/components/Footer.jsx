import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-16 sm:pt-24 pb-8 sm:pb-12 relative overflow-hidden border-t border-white/10">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      {/* Gradient blobs */}
      <div className="absolute -top-40 -right-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-20 -left-40 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-accent-tertiary/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          <div className="sm:col-span-2 md:col-span-5">
            <div className="flex items-center mb-4 sm:mb-6 gap-2">
              <svg className="w-6 sm:w-8 h-6 sm:h-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl sm:text-2xl font-bold font-display">NETFLUENCE</span>
            </div>
            <p className="text-white/70 mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
              We build exceptional websites, applications, and custom software solutions that blend beautiful design with powerful functionality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-dark-accent hover:bg-accent hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="sm:col-span-1 md:col-span-2">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Company</h3>
            <nav className="flex flex-col space-y-2 sm:space-y-4">
              {companyLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path}
                  className="text-white/70 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="sm:col-span-1 md:col-span-2">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Services</h3>
            <nav className="flex flex-col space-y-2 sm:space-y-4">
              {serviceLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path}
                  className="text-white/70 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="sm:col-span-2 md:col-span-3">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Contact</h3>
            <div className="flex flex-col space-y-2 sm:space-y-4 text-white/70">
              <a 
                href="mailto:info@netfluence.ca" 
                className="flex items-center gap-2 sm:gap-3 hover:text-white transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@netfluence.ca
              </a>
              <a 
                href="tel:5147927781" 
                className="flex items-center gap-2 sm:gap-3 hover:text-white transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (514) 792-7781
              </a>
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Montreal, QC
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 mb-4 md:mb-0">
            <p className="text-xs sm:text-sm text-white/50 text-center md:text-left">
              &copy; {currentYear} Netfluence. All rights reserved.
            </p>
            <div className="h-4 w-px bg-white/10 hidden md:block"></div>
            <p className="text-xs sm:text-sm text-white/50 text-center md:text-left">
              Web, App & Software Development
            </p>
          </div>
          
          {/* Privacy and Terms links removed */}
        </div>
      </div>
    </footer>
  );
};

// Company links
const companyLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' }
];

// Service links
const serviceLinks = [
  { label: 'Website Development', path: '/services' },
  { label: 'App Development', path: '/services' },
  { label: 'Custom Software', path: '/services' },
  { label: 'UI/UX Design', path: '/services' }
];

// Social media icons using SVG
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/netfluenceinc/',
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    name: 'Email',
    url: 'mailto:info@netfluence.ca',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/netfluenceinc/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2.25c2.69 0 3.58.01 4.95.07 1.4.06 2.16.3 2.67.5.67.26 1.15.57 1.65 1.08.5.5.82.98 1.08 1.65.2.51.44 1.27.5 2.67.06 1.37.07 2.26.07 4.95s-.01 3.58-.07 4.95c-.06 1.4-.3 2.16-.5 2.67-.26.67-.58 1.15-1.08 1.65-.5.5-.98.82-1.65 1.08-.51.2-1.27.44-2.67.5-1.37.06-2.26.07-4.95.07s-3.58-.01-4.95-.07c-1.4-.06-2.16-.3-2.67-.5-.67-.26-1.15-.58-1.65-1.08-.5-.5-.82-.98-1.08-1.65-.2-.51-.44-1.27-.5-2.67-.06-1.37-.07-2.26-.07-4.95s.01-3.58.07-4.95c.06-1.4.3-2.16.5-2.67.26-.67.58-1.15 1.08-1.65.5-.5.98-.82 1.65-1.08.51-.2 1.27-.44 2.67-.5 1.37-.06 2.26-.07 4.95-.07z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 6.5h.01" />
      </svg>
    )
  }
];

export default Footer; 