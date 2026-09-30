import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ThemeContext } from '../context/ThemeContext';
import ProjectCard from '../components/work/ProjectCard';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "Victoria Fish",
      type: "Local Business Website",
      description: "Local business website with modern design and responsive layout.",
      tags: ["React", "Tailwind", "Node.js"],
      accentColor: "#0ea5e9",
      category: "web",
      url: "https://victoriafish.ca/"
    },
    {
      id: 2,
      title: "Win",
      type: "Sports Application",
      description: "NHL web application for viewing live scores and predicting game outcomes.",
      tags: ["React", "Node.js", "Tailwind", "MongoDB"],
      accentColor: "#8b5cf6",
      category: "web",
      url: "http://winsports.ca/",
      comingSoon: true
    },
    {
      id: 3,
      title: "Social Rebrand Collective",
      type: "Marketing Agency",
      description: "Marketing agency website showcasing services and client success stories.",
      tags: ["React", "TailwindCSS", "Node.js"],
      accentColor: "#10b981",
      category: "web",
      url: "https://socialrebrand.ca"
    },
    {
      id: 4,
      title: "North Touch",
      type: "Manufacturing Agent",
      description: "Northtouch Canada Inc. is a leading electronics manufacturer's agents company representing a wide array of world class assembly machines, test, programming, verification and diagnostic.",
      tags: ["React", "Node.js", "Tailwind"],
      accentColor: "#0ea5e9",
      category: "web",
      url: "https://northtouch.com"
    },
    {
      id: 5,
      title: "Chateau Hudson",
      type: "Shopping Mall",
      description: "Website for a shopping mall with store directory and event information.",
      tags: ["Bootstrap", "HTML", "CSS", "JavaScript"],
      accentColor: "#0ea5e9",
      category: "web",
      url: "https://lechateauhudson.com/"
    },
    {
      id: 6,
      title: "Montreal Towing",
      type: "Service Business",
      description: "Towing service website with booking features and service area information.",
      tags: ["WordPress", "Elementor", "PHP"],
      accentColor: "#10b981",
      category: "web",
      url: "https://montrealtowing.net"
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Our Portfolio | Netfluence - Showcase of Digital Excellence</title>
        <meta name="description" content="Explore Netfluence's portfolio of successful web development, mobile app, and software projects. See how we've helped businesses transform their digital presence." />
        <link rel="canonical" href="https://netfluence.com/portfolio" />
        <meta name="keywords" content="web development portfolio, mobile app showcase, software projects, digital agency work, case studies, client projects" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Netfluence Portfolio",
            "description": "Showcase of our best web, mobile app, and software development projects",
            "publisher": {
              "@type": "Organization",
              "name": "Netfluence",
              "logo": {
                "@type": "ImageObject",
                "url": "https://netfluence.com/images/logo.png"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "CreativeWork",
                  "position": 1,
                  "name": "E-commerce Website",
                  "description": "Custom e-commerce solution with advanced product filtering and secure checkout",
                  "image": "https://netfluence.com/images/portfolio/ecommerce-project.jpg",
                  "url": "https://netfluence.com/portfolio/ecommerce"
                },
                {
                  "@type": "CreativeWork",
                  "position": 2,
                  "name": "Healthcare Mobile App",
                  "description": "Patient management application for healthcare providers",
                  "image": "https://netfluence.com/images/portfolio/healthcare-app.jpg",
                  "url": "https://netfluence.com/portfolio/healthcare-app"
                },
                {
                  "@type": "CreativeWork",
                  "position": 3,
                  "name": "Financial Dashboard",
                  "description": "Real-time financial data visualization dashboard for investment firm",
                  "image": "https://netfluence.com/images/portfolio/financial-dashboard.jpg",
                  "url": "https://netfluence.com/portfolio/financial-dashboard"
                }
              ]
            }
          }
        `}</script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-accent-tertiary/10 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center"
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
          
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Our <span className="text-accent">Portfolio</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg max-w-lg mx-auto text-white/80"
            >
              Explore our most recent projects, each crafted with precision and innovative thinking. Our work spans across digital platforms, creating meaningful experiences.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Portfolio items section */}
      <section className="py-20 section-after-hero relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs - wide asymmetric positioning */}
        <div className="absolute top-40 -right-96 w-[1200px] h-[600px] bg-accent/10 rounded-full blur-3xl rotate-6"></div>
        <div className="absolute -bottom-80 left-1/5 w-[700px] h-[700px] bg-accent-tertiary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-10 w-[400px] h-[300px] bg-accent-secondary/5 rounded-full blur-3xl rotate-45"></div>
        
        <div className="container">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8 }}
                className="relative"
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
                    url={project.url}
                    comingSoon={project.comingSoon}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs - vertical stacked positioning */}
        <div className="absolute -top-32 left-1/3 w-[600px] h-[800px] bg-accent/15 rounded-full blur-3xl -rotate-12"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[400px] bg-accent-secondary/10 rounded-full blur-3xl rotate-30"></div>
        <div className="absolute top-2/3 left-0 w-[350px] h-[350px] bg-accent-tertiary/10 rounded-full blur-3xl"></div>
        
        <div className="container">
          <div className="bg-gradient-to-br from-dark-card to-dark-accent/20 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 right-1/4 w-80 h-96 bg-accent/10 rounded-full blur-3xl -rotate-15"></div>
              <div className="absolute -bottom-32 -left-12 w-96 h-80 bg-accent-tertiary/15 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-xl">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Ready to Transform Your Digital Presence?
                </motion.h2>
                
                <motion.p
                  className="text-lg text-white/80 mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Let's discuss how our team can help build a website, app, or software solution tailored to your unique needs.
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link 
                  to="/contact" 
                  className="btn btn-primary whitespace-nowrap"
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage; 