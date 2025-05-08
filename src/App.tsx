import React, { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/work/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/contact/Contact";

const App = () => {
  useEffect(() => {
    // Detect Safari and apply optimizations
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      // Add class to body for Safari-specific CSS
      document.body.classList.add("safari-browser");

      // Disable smooth scrolling on Safari
      document.documentElement.style.scrollBehavior = "auto";

      // Remove all animation classes from DOM
      const elementsToOptimize = document.querySelectorAll(
        ".animated-gradient, .typewriter, .button-effect, .button-3d, .glass"
      );
      elementsToOptimize.forEach((el) => {
        el.classList.add("safari-no-animation");
      });

      // Remove particles container if it exists
      const particles = document.getElementById("particles-js");
      if (particles) {
        particles.style.display = "none";
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />

      <footer className="bg-gray-950 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display font-bold text-xl mb-4">
                Netfluence
              </h3>
              <p className="text-gray-400 mb-4">
                Building digital experiences that drive business growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-accent">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-accent">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-accent">
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold uppercase text-sm tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-accent"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-accent"
                  >
                    Mobile Applications
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-accent"
                  >
                    Custom Software
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-accent"
                  >
                    SEO Optimization
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold uppercase text-sm tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-accent">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-gray-400 hover:text-accent">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-accent"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-accent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold uppercase text-sm tracking-wider mb-4">
                Contact Us
              </h3>
              <address className="not-italic text-gray-400">
                <p>Montreal, QC</p>
                <p>Canada</p>
                <p className="mt-4">
                  <a
                    href="mailto:info@netfluence.ca"
                    className="hover:text-accent"
                  >
                    info@netfluence.ca
                  </a>
                </p>
                <p className="mt-2">
                  <a href="tel:5147927781" className="hover:text-accent">
                    514-792-7781
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
            <p>
              &copy; {new Date().getFullYear()} Netfluence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
