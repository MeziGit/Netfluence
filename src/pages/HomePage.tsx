import React, { useEffect, useRef, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PageProps } from "../types/page";
import { createStaticComponents } from "../components/ui/StaticComponents";
import {
  useOptimizedAnimation,
  createOptimizedBlurElement,
} from "../hooks/useOptimizedAnimation";

// Memoized motion components to prevent re-renders in Safari
const MotionScrollIndicator = memo(() => (
  <motion.div
    className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
    animate={{ y: [0, 15, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  ></motion.div>
));

// Memoized testimonial component to prevent re-renders
const TestimonialCard = memo(
  ({
    testimonial,
  }: {
    testimonial: {
      text: string;
      name: string;
      role: string;
      company: string;
    };
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="card p-8 text-center"
    >
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-12 h-12 mx-auto text-accent/30"
          viewBox="0 0 975.036 975.036"
        >
          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>
      </div>
      <p className="text-xl mb-8">{testimonial.text}</p>
      <div>
        <p className="font-bold text-lg">{testimonial.name}</p>
        <p className="text-accent">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </motion.div>
  )
);

// Set display names
MotionScrollIndicator.displayName = "MotionScrollIndicator";
TestimonialCard.displayName = "TestimonialCard";

const HomePage = ({ isMobile = false, isSafari = false }: PageProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialsRef = useRef(null);

  // Create static components based on device/browser
  const { StaticComponent, StaticCard, getSafariAnimationProps } =
    createStaticComponents({
      isMobile,
      isSafari,
    });

  // Testimonials data
  const testimonials = [
    {
      text: "Netfluence transformed our outdated website into a modern, responsive platform that's driving real business results. Their team was professional and delivered beyond our expectations.",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechSolutions Inc",
    },
    {
      text: "Working with Netfluence was a game-changer for our startup. Their expertise in modern web technologies helped us launch quickly with a beautiful, high-performance site.",
      name: "David Chen",
      role: "Founder",
      company: "InnovateLabs",
    },
    {
      text: "The team at Netfluence truly understands how to balance stunning design with technical performance. Our e-commerce conversion rates increased by 35% after the redesign.",
      name: "Michael Rodriguez",
      role: "E-Commerce Manager",
      company: "StyleShop",
    },
  ];

  // Create optimized blur elements
  const accentBlur = createOptimizedBlurElement({
    color: "var(--accent-color)",
    size: 64 * 4,
    position: { top: "-40px", right: "-40px" },
    className: "bg-accent",
  });

  const tertiaryBlur = createOptimizedBlurElement({
    color: "var(--accent-tertiary-color)",
    size: 72 * 4,
    position: { bottom: "-80px", left: "-40px" },
    className: "bg-accent-tertiary",
  });

  return (
    <>
      <Helmet>
        <title>Netfluence - Modern Web Development & Design</title>
        <meta
          name="description"
          content="Expert web development and design services using React, Next.js, and modern technologies to create high-performance websites and applications."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero section min-h-screen flex items-center relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <StaticComponent>
              <h1 className="mb-6 reveal">
                <span className="text-accent block">Modern Solutions</span> for
                Digital Success
              </h1>
              <p className="text-xl text-gray-300 mb-8 reveal">
                We craft high-performance websites and applications that deliver
                measurable results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Start Your Project
                </Link>
                <Link to="/portfolio" className="btn btn-outline">
                  View Our Work
                </Link>
              </div>
            </StaticComponent>

            <StaticComponent className="hero-image hidden lg:block">
              <div className="relative">
                {/* Use simplified blur elements */}
                <motion.div {...accentBlur} />
                <motion.div {...tertiaryBlur} />

                <div className="code-window">
                  <div className="code-header">
                    <div className="code-dot"></div>
                    <div className="code-dot"></div>
                    <div className="code-dot"></div>
                    <span className="text-xs opacity-75">
                      react-component.tsx
                    </span>
                  </div>
                  <div className="code-body">
                    <pre>
                      <code>
                        <span className="text-blue-400">import</span>{" "}
                        <span className="text-green-400">React</span>{" "}
                        <span className="text-blue-400">from</span>{" "}
                        <span className="text-orange-400">'react'</span>;
                        {"\n\n"}
                        <span className="text-blue-400">const</span>{" "}
                        <span className="text-yellow-400">MyComponent</span> ={" "}
                        <span className="text-purple-400">()</span> =&gt; {"{"}
                        {"\n  "}
                        <span className="text-blue-400">return</span> (
                        {"\n    "}
                        &lt;<span className="text-green-400">div</span>&gt;
                        {"\n      "}
                        &lt;<span className="text-green-400">h1</span>{" "}
                        <span className="text-yellow-400">className</span>=
                        <span className="text-orange-400">
                          "text-accent-500"
                        </span>
                        &gt;
                        {"\n        "}
                        <span className="text-gray-300">
                          Hello, Netfluence!
                        </span>
                        {"\n      "}
                        &lt;/<span className="text-green-400">h1</span>&gt;
                        {"\n      "}
                        &lt;<span className="text-green-400">p</span>&gt;
                        <span className="text-gray-300">
                          Building modern web experiences
                        </span>
                        &lt;/<span className="text-green-400">p</span>&gt;
                        {"\n    "}
                        &lt;/<span className="text-green-400">div</span>&gt;
                        {"\n  "}
                        );{"\n"}
                        {"}"};{"\n\n"}
                        <span className="text-blue-400">
                          export default
                        </span>{" "}
                        <span className="text-yellow-400">MyComponent</span>;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </StaticComponent>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="mb-2 text-sm text-gray-400">Scroll to explore</div>
          <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-400 flex justify-center">
            <MotionScrollIndicator />
          </div>
        </div>
      </section>

      {/* Testimonials Section with Optimized Animation */}
      <section className="testimonials section bg-gradient-to-b from-dark to-darker">
        <div className="container">
          <StaticComponent className="text-center mb-16">
            <h2 className="mb-6">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Don't just take our word for it - hear from some of our satisfied
              clients.
            </p>
          </StaticComponent>

          <div className="max-w-3xl mx-auto" ref={testimonialsRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                {...getSafariAnimationProps()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard
                  testimonial={testimonials[activeTestimonial]}
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-accent scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
