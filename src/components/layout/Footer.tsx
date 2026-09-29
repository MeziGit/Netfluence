import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="nf-footer">
      <div className="nf-wrap">
        <div className="nf-footer__grid">
          <div className="nf-footer__brand">
            <Link to="/" className="nf-wordmark">
              Netfluence
            </Link>
            <p>
              A development studio in Montréal. Websites, web apps, custom
              software and hosting for local businesses.
            </p>
          </div>

          <div className="nf-footer__col">
            <h2>Studio</h2>
            <ul>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="nf-footer__col">
            <h2>Contact</h2>
            <address>
              <ul>
                <li>
                  <a href="mailto:info@netfluence.ca">info@netfluence.ca</a>
                </li>
                <li>
                  <a href="tel:+15147927781">514-792-7781</a>
                </li>
                <li>
                  <span>Montréal, QC</span>
                </li>
              </ul>
            </address>
          </div>

          <div className="nf-footer__col">
            <h2>Follow</h2>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/netfluenceinc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/netfluenceinc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="nf-footer__base">
          {/* The pre-rendered year is the build year; this lets the browser correct it. */}
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Netfluence. All rights reserved.
          </p>
          <p>Made in Montréal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
