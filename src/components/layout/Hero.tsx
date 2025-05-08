import React, { lazy, Suspense } from "react";

// Lazy load the code editor content
const CodeEditor = lazy(() => import("./CodeEditor"));

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-6 z-10 pt-24 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-7/12">
            <div className="mb-2 inline-block">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">
                Montreal-Based Development Studio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Creating exceptional digital{" "}
              <span className="relative">
                <span className="text-accent inline-block">
                  Web Development
                </span>
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              We craft cutting-edge websites, mobile apps, and custom software
              solutions that help businesses thrive in the digital landscape.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-accent text-white px-8 py-4 rounded-md font-medium"
              >
                Explore Services
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-md font-medium border border-gray-700 text-white flex items-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get in Touch
              </a>
            </div>

            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <i className="fas fa-star text-accent"></i>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <i className="fas fa-star text-accent"></i>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <i className="fas fa-star text-accent"></i>
                </div>
              </div>
              <div className="ml-4">
                <span className="block text-white font-medium">
                  Rated 5 stars
                </span>
                <span className="text-gray-400 text-sm">
                  by over 50 clients
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="relative max-w-lg mx-auto">
              <div className="aspect-w-4 aspect-h-3">
                <div className="w-full h-full bg-gray-800/50 overflow-hidden rounded-2xl p-1">
                  <Suspense
                    fallback={
                      <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                        <div className="text-accent">Loading...</div>
                      </div>
                    }
                  >
                    <CodeEditor />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
