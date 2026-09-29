import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blur the page behind the open mobile menu and lock scrolling
  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    const classes = ["blur-md", "brightness-50"];

    if (mainContent) {
      classes.forEach((c) => mainContent.classList.toggle(c, menuOpen));
    }
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
      if (mainContent) classes.forEach((c) => mainContent.classList.remove(c));
    };
  }, [menuOpen]);

  // Escape closes the menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `nf-header__link${isActive ? " is-active" : ""}`;

  return (
    <>
      <header
        className={`nf-header${scrolled ? " is-scrolled" : ""}${
          menuOpen ? " is-open" : ""
        }`}
      >
        <div className="nf-wrap nf-header__bar">
          <Link to="/" className="nf-wordmark" aria-label="Netfluence home">
            Netfluence
          </Link>

          <nav className="nf-header__nav" aria-label="Main">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="nf-btn nf-btn--primary nf-btn--sm">
              Start a project
            </Link>
          </nav>

          <button
            type="button"
            className="nf-header__toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="nf-mobile-menu"
          >
            <span className="nf-header__toggle-lines" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="nf-mobile-menu"
              className="nf-header__panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="nf-wrap">
                <nav aria-label="Mobile">
                  {[{ label: "Home", path: "/" }, ...navItems].map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.path === "/"}
                      className={({ isActive }) =>
                        isActive ? "is-active" : ""
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <Link
                    to="/contact"
                    className="nf-btn nf-btn--primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    Start a project
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Not on /contact: the page is already the form, and the button would cover its submit */}
      {!menuOpen && location.pathname !== "/contact" && (
        <Link to="/contact" className="nf-fab" aria-label="Contact us">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 5h16v11H8l-4 4V5z" />
          </svg>
        </Link>
      )}
    </>
  );
};

const navItems = [
  { label: "Services", path: "/services" },
  { label: "Work", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default Header;
