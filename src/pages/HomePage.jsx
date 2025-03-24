import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const heroRef = useRef(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  
  // Animation to reveal text when in view
  useEffect(() => {
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
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Netfluence | Custom Web, App & Software Development</title>
        <meta name="description" content="We create stunning, functional websites, mobile apps, and custom software solutions for businesses of all sizes." />
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
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
                    >
                      Crafting Digital
                    </motion.span>
                  </span>
                  <span className="block reveal visible">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                      className="text-accent"
                    >
                      Experiences
                    </motion.span>
                  </span>
                  <span className="block reveal visible">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
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
                <div className="code-body relative overflow-hidden min-h-[320px]">
                  {/* Default code view */}
                  <pre className="text-white/80 group-hover:opacity-0 transition-opacity duration-300 absolute inset-0 p-4">
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
                  
                  {/* Hover code view - personalized */}
                  <pre className="text-white/80 group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute inset-0 p-4">
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
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-dark-card/50 relative">
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
                {/* Animated background gradient on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-tertiary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-lg"></div>
                
                <div className="relative z-10">
                  <div className="text-accent-secondary text-3xl mb-6 p-4 bg-accent-secondary/10 rounded-lg w-fit transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-accent-secondary font-medium group/btn"
                  >
                    <span className="relative">
                      Learn More
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-secondary group-hover/btn:w-full transition-all duration-300"></span>
                    </span>
                    <svg className="w-5 h-5 ml-2 transform transition-transform group-hover/btn:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Work - Simplified */}
      <section className="section relative">
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
              <motion.div
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8 }}
              >
                <Link 
                  to={`/portfolio`} 
                  className="block bg-dark-card border border-dark-accent/30 rounded-lg overflow-hidden h-full transition-all duration-300 hover:border-accent/30 hover:shadow-md group"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <span 
                        className="text-xs px-3 py-1 rounded-full mr-3"
                        style={{ 
                          background: `${project.accentColor}15`, 
                          color: project.accentColor 
                        }}
                      >
                        {project.type}
                      </span>
                      
                      <div className="h-px flex-1 bg-dark-accent/30"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                    <p className="text-white/70 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2 py-1 bg-dark-accent/50 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto flex items-center text-accent font-medium">
                      <span>View Project</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Simple Sharp-Edged Testimonials */}
      <section className="section py-20 bg-dark-bg">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="uppercase tracking-wider text-accent text-sm font-medium">Testimonials</span>
            <h2 className="mt-2 mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-dark-card border-2 border-dark-accent hover:border-accent cursor-pointer group transition-all duration-300"
              >
                <div className="p-8">
                  {/* Quote */}
                  <p className="text-white/80 mb-6 group-hover:text-white transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Client info */}
                  <div className="flex items-center border-t border-dark-accent pt-4">
                    <div className="w-10 h-10 bg-accent flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-accent group-hover:text-white transition-colors duration-300">{testimonial.name}</div>
                      <div className="text-sm text-white/60">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Simple pagination dots */}
          <div className="flex justify-center mt-10 gap-2">
            {[0, 1, 2].map(i => (
              <button 
                key={i}
                onClick={() => {}}
                className={`w-8 h-1 ${i === selectedTestimonial ? 'bg-accent' : 'bg-dark-accent'} transition-colors duration-300 hover:bg-accent/70`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="bg-gradient-to-br from-dark-card to-dark-accent/20 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-tertiary/10 rounded-full blur-3xl"></div>
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Hosting",
    description: "Reliable hosting and maintenance of websites, databases, and servers to ensure your digital assets are secure and performing optimally.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
  {
    title: "Software Development",
    description: "Developing cutting-edge software solutions tailored to your business needs for improved efficiency and productivity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Application Development",
    description: "Creating and hosting high-performing applications that provide seamless experiences across all devices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  }
];

// Featured projects data
const featuredProjects = [
  {
    title: "ModernCommerce",
    type: "E-commerce Website",
    description: "A fully responsive e-commerce platform with custom product filtering and seamless checkout experience.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    accentColor: "#0ea5e9"
  },
  {
    title: "TaskFlow",
    type: "Web Application",
    description: "A productivity app that helps teams manage projects, track tasks, and collaborate more effectively.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    accentColor: "#10b981"
  }
];

// Testimonials data
const testimonials = [
  {
    quote: "Netfluence transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their attention to detail and technical expertise exceeded our expectations.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechSolutions Inc."
  },
  {
    quote: "Working with Netfluence on our mobile app was a game-changer. Their team not only delivered on time but also provided innovative solutions that enhanced the user experience.",
    name: "Michael Chen",
    role: "CEO",
    company: "AppInnovate"
  },
  {
    quote: "The custom software Netfluence developed for us streamlined our operations and increased efficiency by 40%. Their ongoing support has been invaluable to our business.",
    name: "David Rodriguez",
    role: "Operations Manager",
    company: "Logistics Pro"
  }
];

export default HomePage; 