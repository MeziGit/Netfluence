import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  type: string;
  category: string;
  description: string;
  tags: string[];
  accentColor: string;
}

interface PortfolioProps {
  isMobile?: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isMobile = false }) => {
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  
  // Sample portfolio data
  const projects = [
    {
      id: 1,
      title: 'Retail E-Commerce Platform',
      type: 'Web Development',
      category: 'web',
      description: 'A responsive e-commerce solution built with React and Node.js, featuring secure payments and inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      accentColor: '#6366f1',
    },
    {
      id: 2,
      title: 'Restaurant Booking App',
      type: 'Mobile Application',
      category: 'mobile',
      description: 'iOS and Android app for restaurant reservations with real-time availability, reviews, and user profiles.',
      tags: ['React Native', 'Firebase', 'Google Maps API'],
      accentColor: '#8b5cf6',
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      type: 'Custom Software',
      category: 'software',
      description: 'Comprehensive patient management system with scheduling, electronic medical records, and billing integration.',
      tags: ['Angular', 'C#', '.NET', 'SQL Server'],
      accentColor: '#ec4899',
    },
    {
      id: 4,
      title: 'Financial Dashboard',
      type: 'Web Application',
      category: 'web',
      description: 'Interactive data visualization dashboard for financial analytics with real-time updates and forecasting features.',
      tags: ['Vue.js', 'D3.js', 'Node.js', 'Express'],
      accentColor: '#14b8a6',
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      type: 'Mobile Application',
      category: 'mobile',
      description: 'Fitness tracking application with workout plans, progress tracking, and social features for motivation.',
      tags: ['Swift', 'HealthKit', 'CoreML'],
      accentColor: '#f43f5e',
    },
    {
      id: 6,
      title: 'Inventory Management',
      type: 'Custom Software',
      category: 'software',
      description: 'Enterprise inventory tracking solution with barcode scanning, supplier management, and reporting tools.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      accentColor: '#0ea5e9',
    },
  ];
  
  // Filter projects based on selected category
  useEffect(() => {
    const filtered = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);
    
    // Clear the list first for animation
    setVisibleProjects([]);
    
    // Add projects with a staggered delay for animation
    // On mobile, add all projects at once for better performance
    if (isMobile) {
      setVisibleProjects(filtered);
    } else {
      const timer = setTimeout(() => {
        filtered.forEach((project, index) => {
          setTimeout(() => {
            setVisibleProjects(prev => [...prev, project]);
          }, index * 100);
        });
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [filter, projects, isMobile]);
  
  // Intersection observer to trigger animations when section is visible
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
    
    const workSection = document.getElementById('work');
    if (workSection) {
      observer.observe(workSection);
    }
    
    return () => {
      if (workSection) {
        observer.unobserve(workSection);
      }
    };
  }, [isMobile]);
  
  // Filter categories
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'software', label: 'Software' },
  ];
  
  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* Background blurred shape */}
      <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-accent opacity-5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-medium">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">Featured Projects</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Take a look at some of our recent work across web development, mobile apps, and custom software.
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className={`flex flex-wrap justify-center mb-12 gap-2 sm:gap-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id 
                  ? 'bg-accent text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className={`transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              <ProjectCard
                title={project.title}
                type={project.type}
                description={project.description}
                tags={project.tags}
                accentColor={project.accentColor}
              />
            </div>
          ))}
        </div>
        
        {/* CTA button */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <a 
            href="#contact" 
            className="button-effect button-3d bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-md font-medium transition-all duration-300"
          >
            <i className="fas fa-briefcase mr-2"></i>
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 