// Building blocks shared by every page. Styles live in src/styles/components.css.
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";
import { contact, services, steps, team, testimonials } from "../../data/site";

// True when the viewport matches the query; re-evaluates on resize. Starts false so the
// first render matches the pre-rendered HTML; the effect sets the real value after hydration.
export const useMedia = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
};

export const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export const ArrowUpRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 11 11 5M6 5h5v5" />
  </svg>
);

/* ---------- Brand shader ---------- */

// Brand ramp: mostly near-black and navy, with the logo blue as the light source.
const shaderColors = [
  "#0b1014",
  "#001b32",
  "#08131c",
  "#00456d",
  "#0091d4",
  "#38b6ff",
];

// If WebGL is unavailable the shader throws; keep the page and show the plain background.
class ShaderBoundary extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export const BrandShader = ({ active, ...props }) => {
  const reduce = useReducedMotion();
  return (
    <ShaderBoundary>
      <MeshGradient
        colors={shaderColors}
        distortion={0.85}
        swirl={0.35}
        grainMixer={0.18}
        grainOverlay={0.12}
        speed={reduce || !active ? 0 : 0.18}
        maxPixelCount={1920 * 1080}
        {...props}
      />
    </ShaderBoundary>
  );
};

/* ---------- Page hero (inner pages) ---------- */

// `lines` are the title's lines; they rise out of a mask on load (natural wrap on phones).
export const PageHero = ({ label, lines, lede, children }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0]);

  return (
    <section ref={ref} className="nf-phero">
      <motion.div
        className="nf-phero__bg"
        aria-hidden="true"
        style={{ opacity: bgOpacity }}
      >
        <BrandShader
          active={inView}
          className="nf-shader nf-shader--fade"
          offsetX={0.4}
          offsetY={-0.3}
          scale={1.3}
        />
        <div className="nf-phero__scrim" />
      </motion.div>

      <div className="nf-wrap">
        {label && (
          <p className="nf-phero__label nf-fade" style={{ "--d": "0ms" }}>
            {label}
          </p>
        )}
        <h1 className="nf-phero__title">
          {lines.map((line, i) => (
            <span key={line} className="nf-line">
              <span style={{ "--d": `${60 + i * 70}ms` }}>{line}</span>
            </span>
          ))}
        </h1>
        {lede && (
          <p className="nf-phero__lede nf-fade" style={{ "--d": "260ms" }}>
            {lede}
          </p>
        )}
        {children && (
          <div className="nf-phero__extra nf-fade" style={{ "--d": "340ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

/* ---------- Closing call to action ---------- */

export const CloseCta = ({
  title = "Have a project in mind?",
  lede = "Tell us about your business and what you need. We’ll get back to you with questions and next steps.",
  showButton = true,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  return (
    <section ref={ref} className="nf-close">
      <div className="nf-close__bg" aria-hidden="true">
        <BrandShader
          active={inView}
          className="nf-shader"
          offsetX={0.45}
          offsetY={-0.05}
          scale={1.4}
        />
        <div className="nf-close__scrim" />
      </div>
      <div className="nf-wrap">
        <h2 className="nf-close__title">{title}</h2>
        <div className="nf-close__row nf-grid">
          <p className="nf-lede">{lede}</p>
          <div className="nf-close__actions">
            {showButton && (
              <Link to="/contact" className="nf-btn nf-btn--primary">
                Start a project
              </Link>
            )}
            <a className="nf-close__contact" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a className="nf-close__contact" href={contact.phoneHref}>
              {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Project card ---------- */

export const ProjectCard = ({ p, index }) => (
  <a
    href={p.href}
    target="_blank"
    rel="noopener noreferrer"
    className="nf-card"
  >
    <div className="nf-card__media">
      <img
        src={p.image}
        alt={`${p.name} website`}
        width="1200"
        height="750"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="nf-card__meta">
      <span className="nf-card__index">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3>{p.name}</h3>
        <p className="nf-card__tags">
          {p.kind} · {p.stack.join(", ")}
        </p>
        <p>{p.description}</p>
        <span className="nf-card__url">
          {p.domain} <ArrowUpRight />
        </span>
      </div>
    </div>
  </a>
);

/* ---------- Service rows ---------- */

// Rows link to the Services page, landing on that service's section.
export const ServiceList = ({ items = services, className = "" }) => (
  <ul className={`nf-services__list ${className}`}>
    {items.map((s) => (
      <li key={s.slug}>
        <Link to={`/services#${s.slug}`} className="nf-service">
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <span className="nf-service__arrow" aria-hidden="true">
            <ArrowRight />
          </span>
        </Link>
      </li>
    ))}
  </ul>
);

/* ---------- Testimonials ---------- */

const Attribution = ({ t }) => (
  <figcaption>
    <img className="nf-quote__thumb" src={t.image} alt="" loading="lazy" />
    <span className="nf-quote__who">
      <strong>{t.name}</strong>
      <span>
        {t.role}, {t.company}
      </span>
    </span>
  </figcaption>
);

export const Quotes = ({ title = "From our clients" }) => {
  const [lead, ...others] = testimonials;
  return (
    <section id="testimonials" className="nf-section nf-quotes">
      <div className="nf-wrap nf-grid">
        <figure className="nf-quote nf-quote--lead">
          <h2 className="nf-h2 nf-quotes__head">{title}</h2>
          <blockquote>
            <p>{lead.quote}”</p>
          </blockquote>
          <Attribution t={lead} />
        </figure>

        <div className="nf-quotes__side">
          {others.map((t) => (
            <figure key={t.name} className="nf-quote nf-quote--side">
              <blockquote>
                <p>“{t.quote}”</p>
              </blockquote>
              <Attribution t={t} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Team ---------- */

export const TeamGrid = ({ withBio = false }) => (
  <div className="nf-team__people">
    {team.map((m) => (
      <div key={m.name} className={`nf-person nf-person--${m.key}`}>
        <img
          src={m.photo}
          alt={m.name}
          width="460"
          height="575"
          loading="lazy"
          decoding="async"
        />
        <h3>{m.name}</h3>
        <p>{m.role}</p>
        {withBio && <p className="nf-person__bio">{m.bio}</p>}
      </div>
    ))}
  </div>
);

/* ---------- Process: a line fills as you read the steps ---------- */

// A step lights its dot once the rail's fill has reached it.
const Step = ({ step, index }) => {
  const ref = useRef(null);
  // useMedia rather than useReducedMotion: this feeds a className, which must match the
  // pre-rendered HTML on the first render.
  const reduce = useMedia("(prefers-reduced-motion: reduce)");
  const reached = useInView(ref, { margin: "0px 0px -42% 0px" });
  return (
    <li
      ref={ref}
      className={`nf-step${reached || reduce ? " is-reached" : ""}`}
    >
      <span className="nf-step__num">{String(index + 1).padStart(2, "0")}</span>
      <h3>
        <span className="nf-step__dot" aria-hidden="true" />
        {step.title}
      </h3>
      <p>{step.description}</p>
    </li>
  );
};

export const Process = ({ items = steps }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0, 1]);

  return (
    <div ref={ref} className="nf-steps">
      <span className="nf-steps__rail" aria-hidden="true">
        <motion.i style={{ scaleY: fill }} />
      </span>
      <ol>
        {items.map((s, i) => (
          <Step key={s.title} step={s} index={i} />
        ))}
      </ol>
    </div>
  );
};
