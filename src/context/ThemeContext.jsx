import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Always use dark mode
  const [isDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    // Always add dark class
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Keep the toggleTheme function to maintain API compatibility, but it's a no-op now
  const toggleTheme = () => {
    // No operation - always stay in dark mode
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 