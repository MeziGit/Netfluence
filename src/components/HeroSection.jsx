import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0"></div>
      <div className="absolute inset-0 opacity-20 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>

      <div className="container mx-auto px-4 sm:px-6 z-10 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4 sm:mb-6">
              <span className="inline-block">
                Digital Solutions
                <span className="relative inline-block">
                  <span className="relative z-10">That Deliver</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 z-0"></span>
                </span>
              </span>
              <span className="block mt-2">Real Results</span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto lg:mx-0">
              We transform ideas into powerful digital experiences that
              captivate users and drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="btn-primary">
                Get Started
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>

            <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
                  200+
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Projects Completed
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
                  50+
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Happy Clients
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
                  15+
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">Team Members</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
                  10+
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 bg-gradient-to-br from-accent to-blue-600 p-1 rounded-lg mx-auto max-w-[80%] sm:max-w-[70%] md:max-w-full">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Digital Solutions"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
