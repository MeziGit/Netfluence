import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";

// Lazy load the code editor content
const CodeEditor = lazy(() => import("./CodeEditor"));

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isFileHovered, setIsFileHovered] = useState(false);
  const [isCodeEditorVisible, setIsCodeEditorVisible] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  const typingTexts = [
    "Web Development",
    "Mobile Apps",
    "Custom Software",
    "Interactive Experiences",
    "Digital Solutions",
  ];

  useEffect(() => {
    setIsMounted(true);
    // Detect Safari
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );
    setIsSafari(isSafariBrowser);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    const debouncedResize = debounce(checkMobile, 250);
    window.addEventListener("resize", debouncedResize);

    // Optimize scroll handling for Safari
    const handleScroll = debounce(
      () => {
        if (!isMobile) {
          requestAnimationFrame(() => {
            setScrollY(window.scrollY);
          });
        }
      },
      isSafariBrowser ? 16 : 10
    ); // Use 60fps timing for Safari

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Lazy load code editor when component mounts
    const timer = setTimeout(() => {
      setIsCodeEditorVisible(true);
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timer);
    };
  }, [isMobile]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [typingIndex, typingTexts.length]);

  // Optimize parallax for Safari
  const parallaxStyle = {
    transform: isMobile ? "none" : `translate3d(0, ${scrollY * 0.1}px, 0)`,
    willChange: isMobile ? "auto" : "transform",
    backfaceVisibility: "hidden" as const,
    WebkitBackfaceVisibility: "hidden" as const,
    perspective: 1000,
    WebkitPerspective: 1000,
  };

  // Debounce function
  function debounce(func: Function, wait: number) {
    let timeout: ReturnType<typeof setTimeout>;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const handleScrollToServices = useCallback(() => {
    const element = document.getElementById("services");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  }, []);

  const toggleFileHovered = useCallback(() => {
    if (isMobile) {
      setIsFileHovered(!isFileHovered);
    }
  }, [isMobile, isFileHovered]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        WebkitTransform: "translate3d(0,0,0)",
        WebkitBackfaceVisibility: "hidden",
        WebkitPerspective: 1000,
      }}
    >
      {/* Background particles - reduce complexity for Safari */}
      <div
        id="particles-js"
        className="absolute inset-0 z-0"
        style={{
          WebkitTransform: "translate3d(0,0,0)",
          WebkitBackfaceVisibility: "hidden",
        }}
      ></div>

      {/* Animated gradients - hidden on mobile and Safari */}
      {!isMobile && !isSafari && (
        <>
          <div className="animated-gradient animated-gradient-1"></div>
          <div className="animated-gradient animated-gradient-2"></div>
        </>
      )}

      {/* Content */}
      <div
        className="container mx-auto px-6 z-10 pt-24 lg:pt-0"
        style={{
          WebkitTransform: "translate3d(0,0,0)",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div
            className={`w-full lg:w-7/12 ${
              isMobile ? "" : "transition-all duration-1000"
            } ${isMounted ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-2 inline-block">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">
                Montreal-Based Development Studio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Creating exceptional digital{" "}
              <span className="relative">
                <span className="typewriter h-auto text-accent inline-block overflow-hidden">
                  {typingTexts[typingIndex]}
                </span>
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              We craft cutting-edge websites, mobile apps, and custom software
              solutions that help businesses thrive in the digital landscape.
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
                <p className="text-white font-medium">
                  Trusted by 100+ businesses
                </p>
                <p className="text-gray-400 text-sm">
                  From startups to enterprises
                </p>
              </div>
            </div>
          </div>

          <div
            className={`w-full lg:w-5/12 ${
              isMobile ? "" : "transition-all duration-1000 delay-300"
            } ${isMounted ? "opacity-100" : "opacity-0 translate-y-10"}`}
            style={parallaxStyle}
          >
            <div className="relative max-w-lg mx-auto">
              <div className="aspect-w-4 aspect-h-3">
                <div className="w-full h-full glass overflow-hidden rounded-2xl p-1">
                  {isCodeEditorVisible ? (
                    <Suspense
                      fallback={
                        <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                          <div className="animate-pulse text-accent">
                            Loading...
                          </div>
                        </div>
                      }
                    >
                      <CodeEditor
                        isMobile={isMobile}
                        isFileHovered={isFileHovered}
                        onFileHover={setIsFileHovered}
                        onToggleFileHovered={toggleFileHovered}
                      />
                    </Suspense>
                  ) : (
                    <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                      <div className="animate-pulse text-accent">
                        Loading...
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating elements - hide on very small screens */}
              <div className="absolute -top-5 -right-5 glass p-4 rounded-lg hidden sm:flex">
                <div className="flex items-center">
                  <i className="fas fa-code text-accent text-lg mr-2"></i>
                  <span className="text-white font-medium">Clean Code</span>
                </div>
              </div>
              <div
                className="absolute -bottom-5 -left-5 glass p-4 rounded-lg hidden sm:flex"
                style={{ animationDelay: "1s" }}
              >
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
