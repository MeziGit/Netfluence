import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';

const Cursor = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [hidden, setHidden] = useState(false);

  // Check if device has touch capability (mobile/tablet)
  const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
  };

  useEffect(() => {
    // Don't render cursor on touch devices
    if (isTouchDevice()) {
      setHidden(true);
      return;
    }
    
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const element = e.target;
      
      // Check if hovering over clickable elements
      const isClickable = 
        element.closest('a') || 
        element.closest('button') || 
        element.closest('input') ||
        element.closest('textarea') ||
        element.closest('select') ||
        element.closest('[data-cursor="pointer"]') ||
        element.closest('[role="button"]');
        
      setIsHovered(!!isClickable);
      
      // Check for custom cursor text
      if (element.getAttribute('data-cursor-text')) {
        setCursorText(element.getAttribute('data-cursor-text'));
      } else {
        setCursorText('');
      }
    };

    const onMouseDown = () => {
      setIsClicked(true);
    };

    const onMouseUp = () => {
      setIsClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);
  
  if (hidden || isTouchDevice()) return null;

  return (
    <motion.div
      className="cursor-container fixed top-0 left-0 z-[999] pointer-events-none mix-blend-difference"
      animate={{
        x: position.x - (isHovered ? 24 : 4),
        y: position.y - (isHovered ? 24 : 4),
        transition: {
          type: "spring",
          mass: 0.2,
          stiffness: 800,
          damping: 50,
          ease: [0.25, 1, 0.5, 1],
          duration: 0.1
        }
      }}
    >
      <motion.div
        className="cursor-dot flex items-center justify-center"
        animate={{
          scale: isClicked ? 0.7 : isHovered ? 1 : 1,
          opacity: hidden ? 0 : 1,
          width: isHovered ? 48 : 8,
          height: isHovered ? 48 : 8,
          borderColor: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          backgroundColor: isHovered ? "transparent" : "white"
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut"
        }}
      >
        {cursorText && isHovered && (
          <span className="text-white text-xs font-medium mix-blend-difference">{cursorText}</span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Cursor; 