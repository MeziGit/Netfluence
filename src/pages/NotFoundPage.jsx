import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Netfluence - Web, App & Software Development</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-20 pb-32">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blob */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-accent-tertiary/10 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-[150px] md:text-[200px] font-bold text-white/5 leading-none block">
                404
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 -mt-20"
            >
              Page Not Found
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/70 text-lg mb-12"
            >
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                to="/" 
                className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-full transition-colors duration-300 flex items-center"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 12l2-2m0 0l7-7 7 7m-7-7v14"
                  />
                </svg>
                Back to Homepage
              </Link>
              
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-dark-accent/30 hover:bg-accent/10 text-white font-medium rounded-full transition-colors duration-300"
              >
                Contact Support
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage; 