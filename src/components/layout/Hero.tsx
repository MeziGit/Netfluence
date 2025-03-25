import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isFileHovered, setIsFileHovered] = useState(false);
  
  const typingTexts = [
    'Web Development',
    'Mobile Apps',
    'Custom Software',
    'Interactive Experiences',
    'Digital Solutions'
  ];

  useEffect(() => {
    setIsMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [typingIndex, typingTexts.length]);

  const parallaxStyle = {
    transform: isMobile ? 'none' : `translateY(${scrollY * 0.2}px)`,
  };

  const handleScrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  // Toggle code view on mobile
  const toggleFileHovered = () => {
    if (isMobile) {
      setIsFileHovered(!isFileHovered);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background particles */}
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      
      {/* Animated gradients - hidden on very small screens */}
      <div className="animated-gradient animated-gradient-1"></div>
      <div className="animated-gradient animated-gradient-2"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 pt-24 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className={`w-full lg:w-7/12 ${isMobile ? '' : 'transition-all duration-1000'} ${isMounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-2 inline-block">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">Montreal-Based Development Studio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Creating exceptional digital{' '}
              <span className="relative">
                <span className="typewriter h-auto text-accent inline-block overflow-hidden">
                  {typingTexts[typingIndex]}
                </span>
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              We craft cutting-edge websites, mobile apps, and custom software solutions 
              that help businesses thrive in the digital landscape.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleScrollToServices}
                className="button-effect button-3d bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-md font-medium transition-all duration-300"
              >
                Explore Services
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <a 
                href="#contact" 
                className="button-effect px-8 py-4 rounded-md font-medium border border-gray-700 hover:border-accent text-white hover:text-accent transition-all duration-300 flex items-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get in Touch
              </a>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <i className="fas fa-star text-accent"></i>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <i className="fas fa-star text-accent"></i>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <i className="fas fa-star text-accent"></i>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-white font-medium">Trusted by 100+ businesses</p>
                <p className="text-gray-400 text-sm">From startups to enterprises</p>
              </div>
            </div>
          </div>
          
          <div 
            className={`w-full lg:w-5/12 ${isMobile ? '' : 'transition-all duration-1000 delay-300'} ${isMounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
            style={parallaxStyle}
          >
            <div className="relative max-w-lg mx-auto">
              <div className="aspect-w-4 aspect-h-3">
                <div className="w-full h-full glass overflow-hidden rounded-2xl p-1">
                  <div 
                    className="w-full h-full rounded-xl bg-gray-800 relative flex items-center justify-center p-8"
                    onMouseEnter={() => !isMobile && setIsFileHovered(true)}
                    onMouseLeave={() => !isMobile && setIsFileHovered(false)}
                    onClick={toggleFileHovered}
                  >
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl">
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800"></div>
                    </div>
                    
                    {/* Code editor content */}
                    <div className="z-10 w-full h-full relative">
                      <div className="flex items-center mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 text-xs text-white/50">
                          {isMobile && (
                            <span>
                              {isFileHovered ? "your-amazing-website.js" : "netfluence.js"}
                              {isMobile && (
                                <span className="ml-2 text-xs text-accent">
                                  [tap to {isFileHovered ? "close" : "view"}]
                                </span>
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Code editor with separate containers for mobile display */}
                      <div className="code-body relative overflow-hidden min-h-[320px] md:min-h-[320px] min-h-[220px]">
                        {/* Desktop versions - no changes */}
                        {!isMobile && (
                          <>
                            <pre className="text-white/80 group-hover:opacity-0 transition-opacity duration-300 absolute inset-0 p-4">
                              // ... existing desktop code ...
                            </pre>
                            <pre className="text-white/80 group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute inset-0 p-4">
                              // ... existing desktop hover code ...
                            </pre>
                          </>
                        )}
                        
                        {/* Mobile version - completely new approach */}
                        {isMobile && (
                          <div className="absolute inset-0 p-4 bg-gray-900/60">
                            <div className="font-mono text-xs sm:text-sm text-left relative">
                              {/* File name indicator */}
                              <div className="absolute -top-2 right-0 text-xs">
                                <button 
                                  onClick={() => setIsFileHovered(!isFileHovered)}
                                  className="px-2 py-1 text-[10px] rounded bg-gray-800 text-gray-400"
                                >
                                  {isFileHovered ? "your-amazing-website.js" : "netfluence.js"} 
                                  <span className="ml-1 text-accent">[tap to switch]</span>
                                </button>
                              </div>
                              
                              {/* First file content - Hardware accelerated */}
                              <div 
                                className={`space-y-2 ${isFileHovered ? 'hidden' : 'block'}`}
                                style={{ transform: 'translateZ(0)' }}
                              >
                                <div className="text-gray-400">
                                  <span className="text-purple-500">import</span> <span className="text-cyan-300">'magic'</span>;
                                </div>
                                <div className="text-gray-400">
                                  <span className="text-purple-500">const</span> <span className="text-white">createWebsite</span> = <span className="text-purple-300">() =></span> <span className="text-white">{`{`}</span>
                                </div>
                                <div className="pl-4 text-gray-400">
                                  <span className="text-purple-500">const</span> <span className="text-white">yourWebsite</span> = <span className="text-purple-300">(</span><span className="text-cyan-300">ideas</span><span className="text-purple-300">) =></span> <span className="text-white">{`{`}</span>
                                </div>
                                <div className="pl-8 text-gray-400">
                                  <span className="text-red-400">features:</span> <span className="text-white">{`{`}</span>
                                </div>
                                <div className="pl-12 text-gray-400">
                                  <span className="text-red-400">design:</span> <span className="text-cyan-300">'amazing'</span>,
                                </div>
                                <div className="pl-12 text-gray-400">
                                  <span className="text-red-400">speed:</span> <span className="text-cyan-300">'fast'</span>
                                </div>
                                <div className="pl-8 text-gray-400">
                                  <span className="text-white">{`}`}</span>,
                                </div>
                                <div className="pl-8 text-gray-400">
                                  <span className="text-purple-500">return</span> <span className="text-white">netfluence</span>.<span className="text-white">create</span><span className="text-white">(ideas);</span>
                                </div>
                                <div className="pl-4 text-gray-400">
                                  <span className="text-white">{`}`}</span>;
                                </div>
                                <div className="text-gray-400">
                                  <span className="text-purple-500">return</span> <span className="text-white">netfluence</span>.<span className="text-white">create</span><span className="text-white">(yourWebsite);</span>
                                </div>
                                <div className="text-gray-400">
                                  <span className="text-white">{`}`}</span>;
                                </div>
                              </div>
                              
                              {/* Second file content - Hardware accelerated */}
                              <div 
                                className={`space-y-2 ${isFileHovered ? 'block' : 'hidden'}`}
                                style={{ transform: 'translateZ(0)' }}
                              >
                                <div className="text-gray-400">
                                  <span className="text-purple-500">import</span> <span className="text-cyan-300">'magic'</span>;
                                </div>
                                <div className="text-gray-400">
                                  <span className="text-purple-500">const</span> <span className="text-white">createWebsite</span> = <span className="text-purple-300">() =></span> <span className="text-white">{`{`}</span>
                                </div>
                                <div className="pl-4 text-gray-400">
                                  <span className="text-purple-500">const</span> <span className="text-white">yourWebsite</span> = <span className="text-purple-300">(</span><span className="text-cyan-300">ideas</span><span className="text-purple-300">) =></span> <span className="text-white">{`{`}</span>
                                </div>
                                <div className="pl-8 text-gray-400">
                                  <span className="text-red-400">features:</span> <span className="text-white">{`{`}</span>
                                </div>
                                <div className="pl-12 text-gray-400">
                                  <span className="text-red-400">design:</span> <span className="text-cyan-300">'amazing'</span>,
                                </div>
                                <div className="pl-12 text-gray-400">
                                  <span className="text-red-400">speed:</span> <span className="text-cyan-300">'fast'</span>
                                </div>
                                <div className="pl-8 text-gray-400">
                                  <span className="text-white">{`}`}</span>,
                                </div>
                                <div className="pl-8 text-gray-400">
                                  <span className="text-purple-500">return</span> <span className="text-white">netfluence</span>.<span className="text-white">create</span><span className="text-white">(ideas);</span>
                                </div>
                                <div className="pl-4 text-gray-400">
                                  <span className="text-white">{`}`}</span>;
                                </div>
                                <div className="text-gray-400">
                                  <span className="text-purple-500">return</span> <span className="text-white">netfluence</span>.<span className="text-white">create</span><span className="text-white">(yourWebsite);</span>
                                </div>
                                <div className="text-gray-400">
                                  <span className="text-white">{`}`}</span>;
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements - hide on very small screens */}
              <div className="absolute -top-5 -right-5 glass p-4 rounded-lg hidden sm:flex">
                <div className="flex items-center">
                  <i className="fas fa-code text-accent text-lg mr-2"></i>
                  <span className="text-white font-medium">Clean Code</span>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 glass p-4 rounded-lg hidden sm:flex" style={{ animationDelay: '1s' }}>
                <div className="flex items-center">
                  <i className="fas fa-rocket text-accent text-lg mr-2"></i>
                  <span className="text-white font-medium">Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <i className="fas fa-chevron-down text-accent"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero; 