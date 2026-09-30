import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, type, description, tags, accentColor, url, comingSoon }) => {
  // Function to open the URL when clicked
  const handleViewProject = (e) => {
    // Prevent any parent click handlers from firing
    e.preventDefault();
    e.stopPropagation();
    
    // Open the URL in a new tab
    if (url && !comingSoon) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="h-full p-6 flex flex-col">
      {/* Project header */}
      <div className="flex items-center mb-4">
        <span 
          className="text-xs px-3 py-1 rounded-full mr-3"
          style={{ 
            background: `${accentColor}15`, 
            color: accentColor 
          }}
        >
          {type}
        </span>
        
        <div className="h-px flex-1 bg-dark-accent/30"></div>
        
        <div className="ml-3 text-2xl font-medium text-white/30">
          {id.toString().padStart(2, '0')}
        </div>
      </div>
      
      {/* Project content */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">{title}</h3>
      <p className="text-white/70 mb-6">{description}</p>
      
      {/* Project tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags && tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs px-2 py-1 bg-dark-accent/50 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* View project link */}
      <div className="mt-auto flex items-center text-accent font-medium">
        {comingSoon ? (
          <span className="text-white/50">Coming Soon</span>
        ) : (
          <button 
            onClick={handleViewProject}
            className="inline-flex items-center group cursor-pointer hover:text-accent-light py-2 px-1 -ml-1 relative z-20 active:opacity-75 touch-manipulation"
            style={{ 
              color: accentColor,
              WebkitTapHighlightColor: 'transparent'
            }}
            aria-label={`View ${title} project`}
          >
            <span className="relative">View Project</span>
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  accentColor: PropTypes.string,
  url: PropTypes.string,
  comingSoon: PropTypes.bool
};

ProjectCard.defaultProps = {
  accentColor: "#0ea5e9",
  comingSoon: false
};

export default ProjectCard; 