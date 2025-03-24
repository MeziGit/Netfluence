import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, type, description, tags, accentColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  };
  
  const calculateTransform = () => {
    if (!isHovered) return 'translateY(0) rotateX(0) rotateY(0)';
    
    const rotateY = (mousePosition.x - 0.5) * 10; // -5 to 5 degrees
    const rotateX = (0.5 - mousePosition.y) * 10; // -5 to 5 degrees
    
    return `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  return (
    <div 
      className="group w-full glass glass-hover rounded-2xl overflow-hidden transition-all duration-500"
      style={{ 
        transform: calculateTransform(),
        transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        perspective: '1000px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="p-6 md:p-8 relative h-full flex flex-col">
        {/* Top gradient line */}
        <div 
          className="absolute top-0 left-0 w-full h-1 transition-transform duration-300 transform origin-left group-hover:scale-x-100 scale-x-0"
          style={{ background: accentColor }}
        ></div>
        
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill={accentColor} d="M47.5,-51.2C59.1,-39.1,64.9,-19.6,64.1,-0.8C63.3,18,55.9,36,42.2,49.8C28.5,63.6,8.5,73.2,-9.9,73C-28.4,72.8,-45.3,62.7,-59.8,46.7C-74.4,30.7,-86.5,8.7,-83.8,-11.2C-81.1,-31.1,-63.6,-48.8,-45.5,-60.6C-27.3,-72.4,-8.4,-78.5,5.2,-74.1C18.8,-69.7,35.9,-63.3,47.5,-51.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        {/* Content */}
        <div className="mb-4">
          <span 
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: accentColor }}
          >
            {type}
          </span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-display font-bold mb-4 text-white">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 flex-grow">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs rounded-full font-medium"
              style={{ 
                background: `${accentColor}20`, 
                color: accentColor 
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Button */}
        <div className="mt-auto">
          <a 
            href="/portfolio"
            className="inline-flex items-center font-medium transition-all duration-300"
            style={{ color: accentColor }}
          >
            View Details
            <svg 
              className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  accentColor: PropTypes.string.isRequired
};

export default ProjectCard; 