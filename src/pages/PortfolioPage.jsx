import React from "react";
import { PageMeta } from "../components/site/PageMeta";
import {
  ArrowUpRight,
  CloseCta,
  PageHero,
  ProjectCard,
} from "../components/site/blocks";
import { projects, testimonials } from "../data/site";
import "../styles/pages/work.css";

// A testimonial's company is the project name or its short form ("Northtouch").
const quoteFor = (p) =>
  testimonials.find(
    (t) => p.name === t.company || p.name.startsWith(`${t.company} `),
  );

// Projects with a client quote get a full row; the rest share a grid below.
const featured = projects
  .map((p) => ({ p, quote: quoteFor(p) }))
  .filter((f) => f.quote);
const others = projects.filter((p) => !quoteFor(p));

const pad = (n) => String(n).padStart(2, "0");

const Feature = ({ p, quote, index }) => (
  <article className="nf-feature nf-grid">
    {/* The domain link below is the accessible link; this one is for pointer users. */}
    <a
      className="nf-feature__media"
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      aria-hidden="true"
    >
      <img
        src={p.image}
        alt=""
        width="1200"
        height="750"
        loading={index === 0 ? "eager" : "lazy"}
        decoding="async"
      />
    </a>

    <div className="nf-feature__body">
      <div className="nf-feature__meta">
        <span className="nf-feature__index">{pad(index + 1)}</span>
        <h2>{p.name}</h2>
        <p className="nf-feature__tags">
          {p.kind} · {p.stack.join(", ")}
        </p>
        <p className="nf-feature__desc">{p.description}</p>
        <a
          className="nf-link nf-feature__url"
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${p.domain} (opens in a new tab)`}
        >
          {p.domain} <ArrowUpRight />
        </a>
      </div>

      <figure className="nf-feature__quote">
        <blockquote>
          <p>“{quote.quote}”</p>
        </blockquote>
        <figcaption>
          <strong>{quote.name}</strong>
          <span>
            {quote.role}, {quote.company}
          </span>
        </figcaption>
      </figure>
    </div>
  </article>
);

const PortfolioPage = () => (
  <div className="nf-page nf-workpage">
    <PageMeta path="/portfolio" />

    <PageHero
      label="Work"
      lines={["Five projects,", "all of them live."]}
      lede="Five websites we designed and built for our clients. Each one links to the live site, so you can open it on your own phone and try it."
    />

    <section className="nf-features" aria-label="Projects with client quotes">
      <div className="nf-wrap">
        {featured.map(({ p, quote }, i) => (
          <Feature key={p.name} p={p} quote={quote} index={i} />
        ))}
      </div>
    </section>

    <section className="nf-section nf-more">
      <div className="nf-wrap">
        <h2 className="nf-h2 nf-more__head">More projects</h2>
        <ul className="nf-more__list nf-grid">
          {others.map((p, i) => (
            <li key={p.name}>
              <ProjectCard p={p} index={featured.length + i} />
            </li>
          ))}
        </ul>
      </div>
    </section>

    <CloseCta />
  </div>
);

export default PortfolioPage;
