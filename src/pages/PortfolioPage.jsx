import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ThemeContext } from '../context/ThemeContext';
import ProjectCard from '../components/work/ProjectCard';

const PortfolioPage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "Neural Engine",
      type: "Web Platform",
      description: "AI-powered design system with adaptive components and real-time collaboration tools.",
      tags: ["React", "WebGL", "Node.js", "TensorFlow"],
      accentColor: "#0ea5e9",
      category: "web"
    },
    {
      id: 2,
      title: "Spatial Guide",
      type: "Mobile Experience",
      description: "Location-based AR application for cultural exploration using spatial audio and visual overlays.",
      tags: ["React Native", "ARKit", "Mapbox", "AWS"],
      accentColor: "#8b5cf6",
      category: "mobile"
    },
    {
      id: 3,
      title: "Pulse Analytics",
      type: "Data Visualization",
      description: "Real-time data platform visualizing complex information using 3D interactive displays.",
      tags: ["Three.js", "D3", "Python", "WebSockets"],
      accentColor: "#10b981",
      category: "design"
    },
    {
      id: 4,
      title: "Flux Marketplace",
      type: "E-commerce Platform",
      description: "Next-gen marketplace with dynamic product visualization and personalized experience.",
      tags: ["Next.js", "GraphQL", "Shopify", "Framer Motion"],
      accentColor: "#0ea5e9",
      category: "web"
    },
    {
      id: 5,
      title: "Echo Connect",
      type: "Social Platform",
      description: "Audio-first social network with spatial conversation rooms and rich interaction features.",
      tags: ["Vue.js", "WebRTC", "Firebase", "WebAudio API"],
      accentColor: "#0ea5e9",
      category: "web"
    },
    {
      id: 6,
      title: "Prism Gallery",
      type: "3D Exhibition",
      description: "Virtual gallery space with immersive artwork viewing and spatial audio experience.",
      tags: ["WebGL", "Three.js", "React", "GLSL Shaders"],
      accentColor: "#10b981",
      category: "design"
    }
  ];
  
  // Filter projects by category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Categories for filter buttons
  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' }
  ];
  
  return (
    <>
      <Helmet>
        <title>Portfolio | Netfluence</title>
        <meta name="description" content="Explore our creative portfolio of digital projects" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-dark-bg">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blob */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent-tertiary/20 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-accent-tertiary/10 text-accent-tertiary font-medium text-sm inline-flex items-center">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C13.5 8 15.5 8 17 8V15C15.5 15 13.5 15 12 16.5C10.5 15 8.5 15 7 15V8C8.5 8 10.5 8 12 6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 8V3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 8V3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 20.5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 20.5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Our Portfolio
            </span>
          </motion.div>
          
          <div className="max-w-3xl">
            <h1 className="mb-6 leading-tight">
              <span className="block reveal visible">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
                >
                  Our Work
                </motion.span>
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg max-w-lg text-white/80"
            >
              Explore our most recent projects, each crafted with precision and innovative thinking. Our work spans across digital platforms, creating meaningful experiences.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="py-12 bg-dark-bg border-t border-dark-accent/30">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Filter Projects</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`px-5 py-2 text-sm font-medium border-2 ${
                    activeCategory === category.id 
                      ? 'border-accent-tertiary text-accent-tertiary' 
                      : 'border-dark-accent/50 text-white/70 hover:border-dark-accent'
                  } transition-all duration-300`}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8 }}
              >
                <div className="border-2 border-dark-accent/30 hover:border-accent/30 bg-dark-card transition-all duration-300 h-full">
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    type={project.type}
                    description={project.description}
                    tags={project.tags}
                    accentColor={project.accentColor}
                    category={project.category}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 bg-dark-bg">
        <div className="container">
          <div className="bg-gradient-to-br from-dark-card to-dark-accent/20 border-2 border-dark-accent/30 p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-tertiary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Ready to start a project?
              </motion.h2>
              
              <motion.p
                className="text-lg text-white/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Let's discuss how our team can help bring your ideas to life with our expertise in web, app, and software development.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a 
                  href="/contact" 
                  className="btn btn-primary"
                >
                  Get in Touch
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage; 