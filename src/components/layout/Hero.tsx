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
                    onMouseEnter={() => setIsFileHovered(true)}
                    onMouseLeave={() => setIsFileHovered(false)}
                  >
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl">
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800"></div>
                      <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
                    </div>
                    
                    {/* Code editor content */}
                    <div className="z-10 w-full">
                      <div className="flex items-center mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 text-xs text-white/50">
                          <span className="hidden group-hover:inline">netfluence.js</span>
                        </div>
                      </div>
                      
                      {/* Desktop code view - default state */}
                      <div className={`space-y-2 font-mono text-xs sm:text-sm text-left ${isMobile ? 'hidden' : (isFileHovered ? 'hidden' : 'block')}`}>
                        <div className="text-gray-400">
                          <span className="text-accent">const</span> <span className="text-gray-100">netfluence</span> = <span className="text-accent">{`{`}</span>
                        </div>
                        <div className="pl-6 text-gray-400">
                          <span className="text-green-400">expertise:</span> [<span className="text-gray-100">'web'</span>, <span className="text-gray-100">'mobile'</span>, <span className="text-gray-100">'software'</span>],
                        </div>
                        <div className="pl-6 text-gray-400">
                          <span className="text-green-400">location:</span> <span className="text-gray-100">'Montreal, QC'</span>,
                        </div>
                        <div className="pl-6 text-gray-400">
                          <span className="text-green-400">clients:</span> <span className="text-gray-100">100</span>,
                        </div>
                        <div className="pl-6 text-gray-400">
                          <span className="text-green-400">createAwesomeProduct:</span> <span className="text-accent">() =></span> <span className="text-accent">{`{`}</span>
                        </div>
                        <div className="pl-12 text-gray-400">
                          <span className="text-green-400">return</span> <span className="text-gray-100">'Exceptional digital solutions'</span>;
                        </div>
                        <div className="pl-6 text-gray-400">
                          <span className="text-accent">{`}`}</span>
                        </div>
                        <div className="text-gray-400">
                          <span className="text-accent">{`}`}</span>;
                        </div>
                        <div className="text-gray-400 animate-pulse">
                          <span className="text-green-400">netfluence</span>.<span className="text-gray-300">createAwesomeProduct</span>();
                        </div>
                      </div>
                      
                      {/* Mobile code view - simplified version */}
                      <div className={`space-y-2 font-mono text-xs sm:text-sm text-left ${isMobile ? (!isFileHovered ? 'block' : 'hidden') : 'hidden'}`}>
                        <div className="text-gray-400">
                          <span className="text-accent">const</span> <span className="text-gray-100">netfluence</span> = <span className="text-accent">{`{`}</span>
                        </div>
                        <div className="pl-4 text-gray-400">
                          <span className="text-green-400">services:</span> [<span className="text-gray-100">'web'</span>, <span className="text-gray-100">'mobile'</span>],
                        </div>
                        <div className="pl-4 text-gray-400">
                          <span className="text-green-400">create:</span> <span className="text-accent">() =></span> <span className="text-accent">{`{`}</span>
                        </div>
                        <div className="pl-8 text-gray-400">
                          <span className="text-green-400">return</span> <span className="text-gray-100">'Amazing'</span>;
                        </div>
                        <div className="pl-4 text-gray-400">
                          <span className="text-accent">{`}`}</span>
                        </div>
                        <div className="text-gray-400">
                          <span className="text-accent">{`}`}</span>;
                        </div>
                        <div className="text-gray-400">
                          <span className="text-green-400">netfluence</span>.<span className="text-gray-300">create</span>();
                        </div>
                      </div>
                      
                      {/* Desktop code view - hover state */}
                      <div className={`space-y-2 font-mono text-xs sm:text-sm text-left ${isMobile ? 'hidden' : (isFileHovered ? 'block' : 'hidden')}`}>
                        <div className="text-gray-400">
                          <span className="text-accent">import</span> <span className="text-accent">'magic'</span><span className="text-white">;</span>
                        </div>
                        <div className="text-gray-400">
                          <span className="text-accent">const</span> <span className="text-accent-secondary">buildYourWebsite</span> <span className="text-white">=</span> <span className="text-accent-tertiary">async</span> <span className="text-white">(</span><span className="text-accent-secondary">yourIdeas</span><span className="text-white">) =&gt;</span> <span className="text-white">{'{'}</span>
                        </div>
                        <div className="pl-4 text-gray-400">
                          <span className="text-accent-tertiary">const</span> <span className="text-white">yourBrand</span> <span className="text-white">=</span> <span className="text-accent-tertiary">await</span> <span className="text-accent-secondary">createBrandIdentity</span><span className="text-white">(yourIdeas);</span>
                        </div>
                        <div className="pl-4 text-gray-400">
                          <span className="text-accent-tertiary">const</span> <span className="text-white">features</span> <span className="text-white">=</span> <span className="text-white">{'{'}</span>
                        </div>
                        <div className="pl-8 text-gray-400">
                          <span className="text-white">customDesign:</span> <span className="text-accent-secondary">true</span><span className="text-white">,</span>
                        </div>
                        <div className="pl-8 text-gray-400">
                          <span className="text-white">performance:</span> <span className="text-accent">'blazing-fast'</span><span className="text-white">,</span>
                        </div>
                        <div className="pl-8 text-gray-400">
                          <span className="text-white">support:</span> <span className="text-accent">'24/7'</span>
                        </div>
                        <div className="pl-4 text-gray-400">
                          <span className="text-white">{'}'};</span>
                        </div>
                        <div className="pl-4 text-gray-400">
                          <span className="text-accent-tertiary">return</span> <span className="text-accent-secondary">netfluence</span><span className="text-white">.deliver(yourBrand, features);</span>
                        </div>
                        <div className="text-gray-400">
                          <span className="text-white">{'}'};</span>
                        </div>
                      </div>
                      
                      {/* Mobile code view - hover state */}
                      <div className={`space-y-2 font-mono text-xs sm:text-sm text-left ${isMobile ? (isFileHovered ? 'block' : 'hidden') : 'hidden'}`}>
                        <div className="text-gray-400">
                          <span className="text-accent">import</span> <span className="text-accent">'magic'</span><span className="text-white">;</span>
                        </div>
                        <div className="text-gray-400">
                          <span className="text-accent">const</span> <span className="text-accent-secondary">buildWebsite</span> <span className="text-white">=</span> <span className="text-white">(</span><span className="text-accent-secondary">ideas</span><span className="text-white">) =&gt;</span> <span className="text-white">{'{'}</span>
                        </div>
                        <div className="pl-4 text-gray-400">
                          <span className="text-white">features:</span> <span className="text-white">{'{'}</span>
                        </div>
                        <div className="pl-8 text-gray-400">
                          <span className="text-white">design:</span> <span className="text-accent">'amazing'</span><span className="text-white">,</span>
                        </div>
                        <div className="pl-8 text-gray-400">
                          <span className="text-white">speed:</span> <span className="text-accent">'fast'</span>
                        </div>
                        <div className="pl-4 text-gray-400">
                          <span className="text-white">{'}'},</span>
                        </div>
                        <div className="pl-4 text-gray-400">
                          <span className="text-accent-tertiary">return</span> <span className="text-accent-secondary">netfluence</span><span className="text-white">.create(ideas);</span>
                        </div>
                        <div className="text-gray-400">
                          <span className="text-white">{'}'};</span>
                        </div>
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