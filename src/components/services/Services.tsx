import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';

interface ServicesProps {
  isMobile?: boolean;
}

const Services: React.FC<ServicesProps> = ({ isMobile = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Skip IntersectionObserver on mobile for better performance
    if (isMobile) {
      setIsVisible(true);
      return;
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      observer.observe(servicesSection);
    }
    
    return () => {
      if (servicesSection) {
        observer.unobserve(servicesSection);
      }
    };
  }, [isMobile]);
  
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'We create interactive, responsive websites and web applications with clean code and modern design principles.',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
      isRightAligned: true,
    },
    {
      icon: 'fas fa-cogs',
      title: 'Custom Software',
      description: 'Tailor-made software solutions that address your specific business challenges and operational needs.',
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'E-Commerce Solutions',
      description: 'Feature-rich online stores with secure payment gateways, inventory management, and marketing tools.',
      isRightAligned: true,
    },
    {
      icon: 'fas fa-server',
      title: 'API Development',
      description: 'Robust and scalable APIs that connect your applications and enable seamless data exchange.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Business Intelligence',
      description: 'Data visualization and analytics tools that help you make informed decisions based on your business data.',
      isRightAligned: true,
    },
  ];
  
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-medium">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">Our Services</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs, from web development to custom software.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`transition-all duration-${isMobile ? '300' : '500'} transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${200 + (index * 100)}ms`
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                isRightAligned={service.isRightAligned}
              />
            </div>
          ))}
        </div>
        
        <div className={`flex justify-center mt-16 transition-all duration-${isMobile ? '300' : '500'} transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '800ms' }}>
          <a 
            href="#contact" 
            className="button-effect button-3d bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-md font-medium transition-all duration-300"
          >
            <i className="fas fa-paper-plane mr-2"></i>
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 