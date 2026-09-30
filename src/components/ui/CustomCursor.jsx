import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Check if device has touch screen
    const isTouchDevice = () => {
      return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
    };

    if (isTouchDevice()) {
      document.body.style.cursor = 'auto';
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
      document.body.style.cursor = 'auto';
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over a link or button
      const hoveredEl = document.elementFromPoint(e.clientX, e.clientY);
      
      if (hoveredEl) {
        const isLink = 
          hoveredEl.tagName.toLowerCase() === 'a' || 
          hoveredEl.tagName.toLowerCase() === 'button' ||
          hoveredEl.closest('a') || 
          hoveredEl.closest('button') ||
          hoveredEl.dataset.cursor === 'pointer' ||
          hoveredEl.closest('[data-cursor="pointer"]');
        
        setLinkHovered(!!isLink);
      } else {
        setLinkHovered(false);
      }
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    addEventListeners();
    setHidden(false);
    
    return () => {
      removeEventListeners();
    };
  }, []);

  // Don't show custom cursor on touch devices
  if (typeof navigator !== 'undefined' && 
      (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement)) {
    return null;
  }

  return (
    <motion.div
      className="custom-cursor"
      variants={{
        default: {
          width: 12,
          height: 12,
          x: position.x - 6,
          y: position.y - 6,
          backgroundColor: 'var(--color-primary)',
          mixBlendMode: 'difference',
          opacity: hidden ? 0 : 1
        },
        hover: {
          width: 36,
          height: 36,
          x: position.x - 18,
          y: position.y - 18,
          backgroundColor: 'transparent',
          border: '1px solid var(--color-primary)',
          mixBlendMode: 'difference',
          opacity: hidden ? 0 : 1
        },
        click: {
          width: 24,
          height: 24,
          x: position.x - 12,
          y: position.y - 12,
          opacity: hidden ? 0 : 0.8
        }
      }}
      animate={clicked ? "click" : linkHovered ? "hover" : "default"}
      transition={{
        duration: 0,
        x: { duration: 0 },
        y: { duration: 0 }
      }}
    />
  );
};

export default CustomCursor; 