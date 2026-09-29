import React, { useLayoutEffect, useRef, useState } from "react";
import { PageMeta } from "../components/site/PageMeta";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  BrandShader,
  CloseCta,
  Process,
  ProjectCard,
  Quotes,
  ServiceList,
  TeamGrid,
  useMedia,
} from "../components/site/blocks";
import { projects } from "../data/site";
import "../styles/home.css";

/* ---------- Hero ---------- */

const heroLines = [
  "Websites and web apps,",
  "built by the people",
  "you talk to.",
];

const Hero = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, reduce ? 1 : 0.15],
  );
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.9],
    [1, reduce ? 1 : 0],
  );
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  // Stop animating the shader once the hero is off screen.
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });

  return (
    <section ref={ref} className="nf-hero">
      <motion.div
        className="nf-hero__bg"
        aria-hidden="true"
        style={{ opacity: bgOpacity, scale: bgScale }}
      >
        <BrandShader
          active={inView}
          className="nf-shader nf-shader--hero"
          offsetX={0.34}
          offsetY={-0.22}
          scale={1.15}
        />
        <div className="nf-hero__scrim" />
      </motion.div>

      <div className="nf-wrap">
        <motion.h1 className="nf-hero__title" style={{ y, opacity }}>
          {heroLines.map((line, i) => (
            <span key={line} className="nf-line">
              <span style={{ "--d": `${i * 70}ms` }}>{line}</span>
            </span>
          ))}
        </motion.h1>

        <div className="nf-hero__foot nf-grid">
          <p className="nf-hero__sub nf-fade" style={{ "--d": "280ms" }}>
            Netfluence is a two-person development studio in Montréal. We
            design, build and host websites, web apps and custom software for
            local businesses.
          </p>
          <div className="nf-hero__actions nf-fade" style={{ "--d": "360ms" }}>
            <Link to="/contact" className="nf-btn nf-btn--primary">
              Start a project
            </Link>
            <a href="#work" className="nf-btn nf-btn--ghost">
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Work: vertical scroll drives a horizontal gallery ---------- */

const Work = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const reduce = useReducedMotion();
  const wide = useMedia("(min-width: 768px)");
  const pinned = wide && !reduce;
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    if (!pinned) return;
    const measure = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (track && viewport) {
        setDistance(Math.max(0, track.scrollWidth - viewport.clientWidth));
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const [current, setCurrent] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setCurrent(
      Math.min(projects.length - 1, Math.round(v * (projects.length - 1))),
    );
  });

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`nf-work${pinned ? " is-pinned" : ""}`}
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className="nf-work__pin">
        <div className="nf-wrap nf-work__head">
          <div>
            <h2 className="nf-h2">Selected work</h2>
            <p className="nf-lede">
              Five client projects, all live. Open any of them and click around.
            </p>
          </div>
          <Link to="/portfolio" className="nf-link">
            All projects <ArrowRight />
          </Link>
        </div>

        <div ref={viewportRef} className="nf-work__viewport">
          <motion.div
            ref={trackRef}
            className="nf-work__track"
            style={pinned ? { x } : undefined}
          >
            {projects.map((p, i) => (
              <ProjectCard key={p.name} p={p} index={i} />
            ))}
          </motion.div>
        </div>

        {pinned && (
          <div className="nf-wrap nf-work__foot" aria-hidden="true">
            <div className="nf-work__progress">
              <motion.i style={{ scaleX: scrollYProgress }} />
            </div>
            <span className="nf-work__count">
              {String(current + 1).padStart(2, "0")}
              <span> / {String(projects.length).padStart(2, "0")}</span>
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

/* ---------- Page ---------- */

const HomePage = () => (
  <div className="nf-page nf-home">
    <PageMeta path="/" />

    <Hero />
    <Work />

    <section className="nf-section nf-services">
      <div className="nf-wrap nf-grid">
        <div className="nf-services__intro">
          <h2 className="nf-h2">What we do</h2>
          <p className="nf-lede">
            Most clients come to us for a website. When a business needs more
            than that, we build it too.
          </p>
          <Link to="/services" className="nf-link">
            Services in detail <ArrowRight />
          </Link>
        </div>
        <ServiceList />
      </div>
    </section>

    <Quotes />

    <section className="nf-section">
      <div className="nf-wrap nf-grid">
        <div className="nf-team__intro">
          <h2 className="nf-h2">How a project runs</h2>
          <p className="nf-lede">
            Four steps, with the same two people from the first call to launch
            day.
          </p>
          <TeamGrid />
        </div>
        <div className="nf-team__process">
          <Process />
        </div>
      </div>
    </section>

    <CloseCta />
  </div>
);

export default HomePage;
