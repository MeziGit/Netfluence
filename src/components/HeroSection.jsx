import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0"></div>
      <div className="absolute inset-0 opacity-20 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-accent/20 blur-[80px] animate-float"></div>
      <div className="absolute bottom-20 left-[15%] w-80 h-80 rounded-full bg-blue-500/20 blur-[100px] animate-float-delay"></div>
      
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
              We transform ideas into powerful digital experiences that captivate users and drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="btn-primary">
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
            
            <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">200+</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">50+</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">15+</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Team Members</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">10+</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 bg-gradient-to-br from-accent to-blue-600 p-1 rounded-lg rotate-3 shadow-2xl mx-auto max-w-[80%] sm:max-w-[70%] md:max-w-full">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Digital Solutions" 
                className="rounded-lg -rotate-3 w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 z-0 w-16 sm:w-24 h-16 sm:h-24 bg-accent rounded-lg rotate-12 opacity-70 blur-sm"></div>
            <div className="absolute -top-8 -right-8 z-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500 rounded-full opacity-70 blur-sm"></div>
            
            {/* Floating badges */}
            <div className="absolute top-10 -right-2 sm:-right-6 bg-white text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-xl z-20 flex items-center rotate-3 animate-float hidden sm:flex">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-accent mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-sm sm:text-base">Premium Quality</span>
            </div>
            
            <div className="absolute -bottom-6 left-8 sm:left-12 bg-white text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-xl z-20 flex items-center -rotate-6 animate-float-delay hidden sm:flex">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-accent mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <span className="font-bold text-sm sm:text-base">100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 