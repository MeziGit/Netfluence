import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background particles */}
      <div id="particles-js" className="absolute inset-0 z-0 opacity-30"></div>
      
      {/* Animated gradients */}
      <div className="animated-gradient animated-gradient-1"></div>
      <div className="animated-gradient animated-gradient-2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-medium">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Ready to start your next project? Contact us today for a free consultation and proposal.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
        
        {/* Map or additional info could go here */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-display font-semibold mb-6">Looking to join our team?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always on the lookout for talented individuals to join Netfluence. 
            Send your resume to <a href="mailto:careers@netfluence.ca" className="text-accent hover:underline">careers@netfluence.ca</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 