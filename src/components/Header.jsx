import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Handle scroll changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add blur to page background when menu is open
  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      if (menuOpen) {
        mainContent.classList.add("blur-md");
        mainContent.classList.add("brightness-50");
      } else {
        mainContent.classList.remove("blur-md");
        mainContent.classList.remove("brightness-50");
      }
    }

    // Prevent scrolling when menu is open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      // Cleanup
      document.body.style.overflow = "";
      if (mainContent) {
        mainContent.classList.remove("blur-md");
        mainContent.classList.remove("brightness-50");
      }
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 py-3 sm:py-4 md:py-6 ${
          scrolled
            ? "backdrop-blur-md bg-dark-bg/80 border-b border-dark-accent/50"
            : ""
        }`}
      >
        <div className="container px-4 sm:px-6 md:px-8 flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-xl sm:text-2xl font-bold tracking-tight relative z-10 flex items-center gap-1.5 sm:gap-3"
            data-cursor="pointer"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden xs:inline">NETFLUENCE</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm lg:text-base font-medium uppercase transition-all group
                  ${
                    isActive ? "text-accent" : "text-white/70 hover:text-white"
                  }`
                }
                data-cursor="pointer"
              >
                {({ isActive }) => (
                  <>
                    <span className="relative overflow-hidden block">
                      {item.label}
                      {/* Animated underline on hover */}
                      <span
                        className={`absolute left-0 bottom-0 w-full h-[2px] transform 
                        ${
                          isActive
                            ? "bg-accent"
                            : "bg-white/60 scale-x-0 group-hover:scale-x-100"
                        }
                        transition-transform duration-300 origin-left`}
                      ></span>
                    </span>

                    {/* Hover dot indicator */}
                    <span className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                  </>
                )}
              </NavLink>
            ))}

            <Link to="/contact" className="btn btn-primary btn-sm">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center z-[60]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-cursor="pointer"
            >
              <div className="w-5 sm:w-6 flex flex-col items-end justify-center space-y-1.5">
                <motion.span
                  animate={{
                    width: menuOpen ? "100%" : "100%",
                    rotate: menuOpen ? 45 : 0,
                    y: menuOpen ? 8 : 0,
                  }}
                  className="block h-px bg-current"
                />
                <motion.span
                  animate={{
                    width: menuOpen ? "100%" : "75%",
                    opacity: menuOpen ? 0 : 1,
                  }}
                  className="block h-px bg-current"
                />
                <motion.span
                  animate={{
                    width: menuOpen ? "100%" : "50%",
                    rotate: menuOpen ? -45 : 0,
                    y: menuOpen ? -8 : 0,
                  }}
                  className="block h-px bg-current"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-dark-bg/95 border-b border-dark-accent/20 relative z-50"
            >
              <div className="container px-4 sm:px-6">
                <nav className="flex flex-col space-y-4 sm:space-y-6 py-6 sm:pt-12 sm:pb-8">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `text-xl sm:text-2xl font-semibold transition-all ${
                          isActive
                            ? "text-accent"
                            : "text-white/70 hover:text-white"
                        }`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Contact Button (Mobile Only) */}
      <div className="fixed bottom-5 left-5 z-[100] md:hidden">
        <Link
          to="/contact"
          className="w-12 h-12 rounded-full bg-accent shadow-lg flex items-center justify-center"
          aria-label="Contact Us"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-white"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </Link>
      </div>
    </>
  );
};

// Navigation items
const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

export default Header;
