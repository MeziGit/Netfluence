import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage = ({ isMobile = false }) => {
  const heroRef = useRef(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  
  // No IntersectionObserver or animations on mobile
  useEffect(() => {
    if (isMobile) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [isMobile]);
  
  // Static components for mobile (no animations)
  const StaticComponent = ({ children, className = '' }) => {
    return isMobile ? (
      <div className={className} style={{ willChange: 'auto', transform: 'translateZ(0)' }}>{children}</div>
    ) : (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };
  
  // Static card for mobile (no animations)
  const StaticCard = ({ children, index }) => {
    return isMobile ? (
      <div className="card card-hover relative overflow-hidden" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
        {children}
      </div>
    ) : (
      <motion.div 
        key={index} 
        className="card card-hover reveal group relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ 
          y: -10,
          transition: { duration: 0.3 }
        }}
      >
        {children}
      </motion.div>
    );
  };
  
  return (
    <>
      <Helmet>
        <title>Netfluence | Custom Web, App & Software Development</title>
        <meta name="description" content="We create stunning, functional websites, mobile apps, and custom software solutions for businesses of all sizes. Boost your online presence with our expert digital agency." />
        <link rel="canonical" href="https://netfluence.com/" />
        <meta name="keywords" content="web development, app development, custom software, digital agency, responsive design, SEO optimization" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Netfluence",
            "url": "https://netfluence.com",
            "logo": "https://netfluence.com/images/logo.png",
            "description": "We create stunning, functional websites, mobile apps, and custom software solutions for businesses of all sizes.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Montreal",
              "addressRegion": "QC",
              "addressCountry": "CA"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-XXX-XXX-XXXX",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.facebook.com/netfluence",
              "https://www.twitter.com/netfluence",
              "https://www.linkedin.com/company/netfluence",
              "https://www.instagram.com/netfluence"
            ]
          }
        `}</script>
      </Helmet>
      
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      >
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blob */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-accent-tertiary/10 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-6 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Web, App & Software Development
                </span>
              </motion.div>
              
              <div className="mb-8">
                <h1 className="mb-6 leading-tight">
                  <span className="block reveal visible">
                    <motion.span
                      initial={isMobile ? false : { y: "100%" }}
                      animate={isMobile ? { y: 0 } : { y: 0 }}
                      transition={{ duration: isMobile ? 0.4 : 0.8, ease: [0.4, 0, 0.2, 1], delay: isMobile ? 0 : 0.1 }}
                    >
                      Crafting Digital
                    </motion.span>
                  </span>
                  <span className="block reveal visible">
                    <motion.span
                      initial={isMobile ? false : { y: "100%" }}
                      animate={isMobile ? { y: 0 } : { y: 0 }}
                      transition={{ duration: isMobile ? 0.4 : 0.8, ease: [0.4, 0, 0.2, 1], delay: isMobile ? 0 : 0.2 }}
                      className="text-accent"
                    >
                      Experiences
                    </motion.span>
                  </span>
                  <span className="block reveal visible">
                    <motion.span
                      initial={isMobile ? false : { y: "100%" }}
                      animate={isMobile ? { y: 0 } : { y: 0 }}
                      transition={{ duration: isMobile ? 0.4 : 0.8, ease: [0.4, 0, 0.2, 1], delay: isMobile ? 0 : 0.3 }}
                    >
                      That Stand Out
                    </motion.span>
                  </span>
                </h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg max-w-lg text-white/80"
                >
                  Transform your business with customized web and app development, reliable hosting, and software solutions that help your business thrive in the digital world.
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/portfolio" className="btn btn-primary">
                  View Our Work
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Start a Project
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="reveal visible"
            >
              <div className="code-window group hover:shadow-glow transition-all duration-300">
                <div className="code-header">
                  <div className="flex">
                    <div className="code-dot bg-red-500"></div>
                    <div className="code-dot bg-yellow-500"></div>
                    <div className="code-dot bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-white/50 group-hover:text-accent transition-colors">
                    <span className="group-hover:hidden">netfluence-project.js</span>
                    <span className="hidden group-hover:inline">your-amazing-website.js</span>
                  </div>
                </div>
                <div className="code-body relative overflow-hidden min-h-[320px] md:min-h-[320px] min-h-[220px]">
                  {/* Default code view - Desktop version */}
                  <pre className={`text-white/80 group-hover:opacity-0 transition-opacity duration-300 absolute inset-0 p-4 ${isMobile ? 'hidden' : 'block'}`}>
                    <span className="text-accent-tertiary">const</span> <span className="text-accent-secondary">createAmazingWebsite</span> <span className="text-white">=</span> <span className="text-accent-tertiary">async</span> <span className="text-white">() =&gt;</span> <span className="text-white">{'{'}</span>
                    <br/>
                    <span className="pl-4 text-accent-tertiary">const</span> <span className="text-white">design</span> <span className="text-white">=</span> <span className="text-accent-tertiary">await</span> <span className="text-accent-secondary">designSystem</span><span className="text-white">{'({'}</span>
                    <br/>
                    <span className="pl-8 text-white">modern:</span> <span className="text-accent-secondary">true</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-white">responsive:</span> <span className="text-accent-secondary">true</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-white">interactive:</span> <span className="text-accent-secondary">true</span>
                    <br/>
                    <span className="pl-4 text-white">{')'};</span>
                    <br/><br/>
                    <span className="pl-4 text-accent-tertiary">const</span> <span className="text-white">stack</span> <span className="text-white">=</span> <span className="text-white">{'['}</span>
                    <br/>
                    <span className="pl-8 text-accent">'React'</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-accent">'Tailwind'</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-accent">'Node.js'</span>
                    <br/>
                    <span className="pl-4 text-white">{']'};</span>
                    <br/><br/>
                    <span className="pl-4 text-accent-tertiary">return</span> <span className="text-accent-secondary">launchSuccessfully</span><span className="text-white">(design, stack);</span>
                    <br/>
                    <span className="text-white">{'}'};</span>
                  </pre>
                  
                  {/* Mobile-optimized code view - simplified version */}
                  <pre className={`text-white/80 transition-opacity duration-300 absolute inset-0 p-4 ${isMobile ? 'group-hover:opacity-0 block' : 'hidden'}`}>
                    <span className="text-accent-tertiary">const</span> <span className="text-accent-secondary">createWebsite</span> <span className="text-white">=</span> <span className="text-white">() =&gt;</span> <span className="text-white">{'{'}</span>
                    <br/>
                    <span className="pl-4 text-white">design:</span> <span className="text-accent">'responsive'</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-4 text-white">stack:</span> <span className="text-white">{'['}</span>
                    <br/>
                    <span className="pl-8 text-accent">'React'</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-accent">'Tailwind'</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-accent">'Node.js'</span>
                    <br/>
                    <span className="pl-4 text-white">{']'},</span>
                    <br/>
                    <span className="pl-4 text-white">features:</span> <span className="text-white">{'{'}</span>
                    <br/>
                    <span className="pl-8 text-white">performance:</span> <span className="text-accent">'optimized'</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-white">seo:</span> <span className="text-accent-secondary">true</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-white">mobile:</span> <span className="text-accent-secondary">true</span>
                    <br/>
                    <span className="pl-4 text-white">{'}'}</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-4 text-accent-tertiary">return</span> <span className="text-accent-secondary">success</span><span className="text-white">();</span>
                    <br/>
                    <span className="text-white">{'}'};</span>
                  </pre>
                  
                  {/* Hover code view - personalized (desktop) */}
                  <pre className={`text-white/80 group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute inset-0 p-4 ${isMobile ? 'hidden' : 'block'}`}>
                    <span className="text-accent-tertiary">import</span> <span className="text-accent">'magic'</span><span className="text-white">;</span>
                    <br/>
                    <span className="text-accent-tertiary">const</span> <span className="text-accent-secondary">buildYourWebsite</span> <span className="text-white">=</span> <span className="text-accent-tertiary">async</span> <span className="text-white">(</span><span className="text-accent-secondary">yourIdeas</span><span className="text-white">) =&gt;</span> <span className="text-white">{'{'}</span>
                    <br/>
                    <span className="pl-4 text-accent-tertiary">const</span> <span className="text-white">yourBrand</span> <span className="text-white">=</span> <span className="text-accent-tertiary">await</span> <span className="text-accent-secondary">createBrandIdentity</span><span className="text-white">(yourIdeas);</span>
                    <br/><br/>
                    <span className="pl-4 text-accent-tertiary">const</span> <span className="text-white">features</span> <span className="text-white">=</span> <span className="text-white">{'{'}</span>
                    <br/>
                    <span className="pl-8 text-white">customDesign:</span> <span className="text-accent-secondary">true</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-white">userExperience:</span> <span className="text-accent">'exceptional'</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-white">performance:</span> <span className="text-accent">'blazing-fast'</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-white">support:</span> <span className="text-accent">'24/7'</span>
                    <br/>
                    <span className="pl-4 text-white">{'}'};</span>
                    <br/><br/>
                    <span className="pl-4 text-accent-tertiary">return</span> <span className="text-accent-secondary">netfluence</span><span className="text-white">.deliver(yourBrand, features);</span>
                    <br/>
                    <span className="text-white">{'}'};</span>
                    <br/><br/>
                    <span className="text-accent-tertiary">// Let's build something amazing together!</span>
                  </pre>
                  
                  {/* Hover code view - personalized (mobile) */}
                  <pre className={`text-white/80 group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute inset-0 p-4 ${isMobile ? 'block' : 'hidden'}`}>
                    <span className="text-accent-tertiary">import</span> <span className="text-accent">'magic'</span><span className="text-white">;</span>
                    <br/>
                    <span className="text-accent-tertiary">const</span> <span className="text-accent-secondary">buildYourWebsite</span> <span className="text-white">=</span> <span className="text-white">(</span><span className="text-accent-secondary">ideas</span><span className="text-white">) =&gt;</span> <span className="text-white">{'{'}</span>
                    <br/>
                    <span className="pl-4 text-accent-tertiary">// Transform your ideas into reality</span>
                    <br/>
                    <span className="pl-4 text-accent-tertiary">const</span> <span className="text-white">design</span> <span className="text-white">=</span> <span className="text-accent-secondary">createDesign</span><span className="text-white">(ideas);</span>
                    <br/>
                    <span className="pl-4 text-white">features:</span> <span className="text-white">{'{'}</span>
                    <br/>
                    <span className="pl-8 text-white">design:</span> <span className="text-accent">'amazing'</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-white">speed:</span> <span className="text-accent">'fast'</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-white">responsive:</span> <span className="text-accent-secondary">true</span><span className="text-white">,</span>
                    <br/>
                    <span className="pl-8 text-white">security:</span> <span className="text-accent-secondary">true</span>
                    <br/>
                    <span className="pl-4 text-white">{'}'},</span>
                    <br/>
                    <span className="pl-4 text-accent-tertiary">// Let's make something beautiful</span>
                    <br/>
                    <span className="pl-4 text-accent-tertiary">const</span> <span className="text-white">result</span> <span className="text-white">=</span> <span className="text-accent-secondary">netfluence</span><span className="text-white">.build(ideas);</span>
                    <br/><br/>
                    <span className="pl-4 text-accent-tertiary">return</span> <span className="text-white">result;</span>
                    <br/>
                    <span className="text-white">{'}'};</span>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs - with more varied positioning */}
        <div className="absolute -top-32 right-1/4 w-[700px] h-[500px] bg-accent-secondary/15 rounded-full blur-3xl rotate-12"></div>
        <div className="absolute bottom-1/4 -left-20 w-[450px] h-[650px] bg-accent-tertiary/10 rounded-full blur-3xl"></div>
        
        <div className="container">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-accent-secondary/10 text-accent-secondary font-medium text-sm inline-flex items-center justify-center mb-4">
              Our Services
            </span>
            <h2 className="mb-6">What We Do Best</h2>
            <p className="text-lg text-white/80">
              We specialize in creating tailored digital solutions that help brands stand out and deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <StaticCard key={index} index={index}>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-accent-secondary text-3xl mb-6 p-4 bg-accent-secondary/10 rounded-lg w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                </div>
              </StaticCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Work - Simplified */}
      <section className="section relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs - completely different positioning */}
        <div className="absolute top-1/3 -right-64 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-96 left-1/4 w-[650px] h-[650px] bg-accent-tertiary/10 rounded-full blur-3xl rotate-45"></div>
        
        <div className="container">
          <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
            <div>
              <span className="px-4 py-1.5 rounded-full bg-accent-tertiary/10 text-accent-tertiary font-medium text-sm inline-flex items-center justify-center mb-4">
                Featured Projects
              </span>
              <h2 className="mb-0">Our Latest Work</h2>
            </div>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-accent font-medium hover-underline"
            >
              <span>View All Projects</span>
              <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <StaticCard key={index} index={index}>
                <div 
                  className="block bg-dark-card border border-dark-accent/30 rounded-lg overflow-hidden h-full transition-transform duration-300 hover:border-accent/30 group"
                  style={{ transform: 'translateZ(0)' }} // Hardware acceleration
                >
                  <div className="p-6 h-full flex flex-col">
                    {/* Project header - with touch-friendly tap area */}
                    <div className="flex items-center mb-4 relative">
                      <span 
                        className="text-xs font-medium px-3 py-1 rounded-full mr-3"
                        style={{ 
                          background: `${project.accentColor}20`, 
                          color: project.accentColor,
                          willChange: 'transform' // Performance hint
                        }}
                      >
                        {project.type}
                      </span>
                      
                      <div className="h-px flex-1 bg-dark-accent/30"></div>
                      
                      <div 
                        className="ml-3 text-2xl transform transition-transform duration-300 group-hover:scale-110"
                        style={{ 
                          color: project.accentColor,
                          opacity: 0.5,
                          willChange: 'transform'
                        }}
                      >
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </div>
                    </div>
                    
                    {/* Project content - simplified transitions */}
                    <h3 
                      className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-accent relative"
                    >
                      {project.title}
                      <span className="absolute -left-2 top-1/2 w-1 h-0 group-hover:h-full bg-accent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" style={{ transform: 'translateY(-50%)' }}></span>
                    </h3>
                    
                    <p className="text-white/70 mb-6">{project.description}</p>
                    
                    {/* Tags - simplified with reduced effects */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{ 
                            background: `${project.accentColor}10`, 
                            color: `${project.accentColor}`,
                            transform: 'translateZ(0)' // Hardware acceleration
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Link - with performance optimized transitions */}
                    {project.url ? (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-auto flex items-center font-medium"
                        style={{ 
                          color: project.accentColor,
                          transform: 'translateZ(0)' // Hardware acceleration
                        }}
                      >
                        <span>View Project</span>
                        <span className="inline-block ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </a>
                    ) : (
                      <div className="mt-auto flex items-center font-medium">
                        <span className="text-white/50">Coming Soon</span>
                      </div>
                    )}
                  </div>
                </div>
              </StaticCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs - diagonal positioning */}
        <div className="absolute top-40 left-1/3 w-[550px] h-[550px] bg-accent/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-72 right-48 w-[700px] h-[500px] bg-accent-secondary/10 rounded-full blur-3xl -rotate-12"></div>
        
        <div className="container">
          <div className="mb-16 text-center">
            <span className="uppercase tracking-wider text-accent text-sm font-medium">Testimonials</span>
            <h2 className="mt-2 mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <StaticCard key={index} index={index}>
                <div className="p-8 flex flex-col h-full">
                  {/* Quote */}
                  <p className="text-white/80 mb-6 group-hover:text-white transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Client info */}
                  <div className="flex items-center border-t border-dark-accent pt-4 mt-auto">
                    <div className="w-10 h-10 bg-accent flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-accent group-hover:text-white transition-colors duration-300">{testimonial.name}</div>
                      <div className="text-sm text-white/60">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </StaticCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs - asymmetric positioning */}
        <div className="absolute top-20 -left-96 w-[900px] h-[600px] bg-accent-tertiary/10 rounded-full blur-3xl rotate-12"></div>
        <div className="absolute bottom-10 right-1/5 w-[500px] h-[700px] bg-accent/5 rounded-full blur-3xl -rotate-45"></div>
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-accent-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-accent-secondary/10 text-accent-secondary font-medium text-sm inline-flex items-center justify-center mb-4">
              Our Process
            </span>
            <h2 className="mb-6">How We Work</h2>
            <p className="text-lg text-white/80">
              We follow a structured process to ensure high-quality results and a smooth experience for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <StaticCard key={index} index={index}>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-accent-secondary text-3xl mb-6 p-4 bg-accent-secondary/10 rounded-lg w-fit">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70 mb-6">{step.description}</p>
                </div>
              </StaticCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs - varied colors and overlapping */}
        <div className="absolute -top-40 left-32 w-[450px] h-[650px] bg-accent/15 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-[600px] h-[400px] bg-accent-tertiary/20 rounded-full blur-3xl opacity-60 rotate-45"></div>
        <div className="absolute top-1/2 right-1/2 w-[350px] h-[350px] bg-accent-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container">
          <div className="bg-gradient-to-br from-dark-card to-dark-accent/20 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-36 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-accent-tertiary/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
                <p className="text-lg text-white/80 mb-0">
                  Let's discuss how our team can help build a website, app, or software solution tailored to your unique needs.
                </p>
              </div>
              
              <Link to="/contact" className="btn btn-primary whitespace-nowrap">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Services data
const services = [
  {
    title: "Website Development",
    description: "From creating brand new innovative websites to updating pre-existing ones, we craft responsive, user-friendly sites that showcase your brand.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>
    )
  },
  {
    title: "Hosting",
    description: "Reliable hosting and maintenance of websites, databases, and servers to ensure your digital assets are secure and performing optimally.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.057l1.722-2.008z" />
        <path fillRule="evenodd" d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Software Development",
    description: "Developing cutting-edge software solutions tailored to your business needs for improved efficiency and productivity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Application Development",
    description: "Creating and hosting high-performing applications that provide seamless experiences across all devices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
        <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
      </svg>
    )
  }
];

// Featured projects data
const featuredProjects = [
  {
    title: "Victoria Fish",
    type: "Local Business Website",
    description: "A custom website for a local fish market featuring their products, services, and online ordering capabilities.",
    tags: ["React", "Tailwind", "Node.js"],
    accentColor: "#0ea5e9",
    url: "https://victoriafish.ca/"
  },
  {
    title: "Win",
    type: "Sports Application",
    description: "A web application where users can connect, view live NHL scores, and predict game outcomes.",
    tags: ["React", "Node.js", "Tailwind", "MongoDB"],
    accentColor: "#8b5cf6",
    url: null // Not live yet
  }
];

// Testimonials data
const testimonials = [
  {
    quote: "Netfluence completely transformed our online presence. Our new website has significantly increased our visibility and customer engagement. Their design perfectly captures the essence of our local fish market and has helped drive substantial growth in our online orders.",
    name: "Demetri Papageorgiou",
    role: "Manager",
    company: "Victoria Fish"
  },
  {
    quote: "Working with Netfluence was a seamless experience from start to finish. They understood our vision immediately and created a website that perfectly represents our brand's values and aesthetic. The results have exceeded our expectations in both design and functionality.",
    name: "Ahmad Sidawi",
    role: "Founder",
    company: "Social Rebrand Collective"
  },
  {
    quote: "The website Netfluence developed for us has been a game-changer for our business. Their team's technical expertise and creative approach resulted in a platform that's not only visually stunning but also highly functional. The attention to detail and user experience design has impressed both our team and our clients.",
    name: "Benoit Giroux",
    role: "CEO",
    company: "Northtouch"
  }
];

// Process steps data
const processSteps = [
  {
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience to create a solid foundation for your project.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Design",
    description: "We design a visually appealing and functional website or app that meets your business needs and user expectations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
      </svg>
    )
  },
  {
    title: "Development",
    description: "We develop your website or app using the latest technologies and best practices to ensure high performance and reliability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Testing & Launch",
    description: "We thoroughly test your solution across all devices and browsers before launching, then provide ongoing support to ensure continued success.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    )
  }
];

export default HomePage; 