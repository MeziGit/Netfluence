import React from "react";
import { PageMeta } from "../components/site/PageMeta";
import { Link } from "react-router-dom";
import { ArrowRight, CloseCta, PageHero } from "../components/site/blocks";
import { team } from "../data/site";
import johnAbbott from "../assets/images/about/john-abbott.webp";
import ryanPortrait from "../assets/images/about/ryan.webp";
import "../styles/pages/about.css";

// Ryan's shared photo is a half-length shot; this tighter crop of the same photo
// matches the framing of Kui's headshot at this larger size.
const portraits = { ryan: ryanPortrait };

// How projects run, stated plainly. Each line is backed by `steps` and `services` in data/site.js.
const practices = [
  {
    title: "Who you deal with",
    body: "Ryan and Kui, directly. There’s no account manager in between.",
  },
  {
    title: "Design",
    body: "You see and approve the page designs before we start building.",
  },
  {
    title: "Testing",
    body: "We test on phones and in the major browsers before launch.",
  },
  {
    title: "After launch",
    body: "We host and maintain what we build, and make changes when you need them.",
  },
];

const AboutPage = () => (
  <div className="nf-page nf-about">
    <PageMeta path="/about" />

    <PageHero
      label="About"
      lines={["A small development", "studio in Montréal."]}
      lede="Netfluence is Ryan Meziane and Kui Hua Wang. We design, build and host websites and software for local businesses."
    />

    <section className="nf-section nf-about-story">
      <div className="nf-wrap nf-grid">
        <h2 className="nf-h2 nf-about-story__head">Background</h2>
        <div className="nf-about-story__body">
          <p className="nf-about-story__lead">
            We both studied Computer Science at John Abbott College and started
            Netfluence in May 2024.
          </p>
          <p>
            Most of our work is websites for local businesses: a fish market, an
            electronics sales agency, a shopping centre, a towing company and a
            marketing agency. Some clients also need custom software or an app,
            and we build those too. We host and maintain what we build.
          </p>
          <Link to="/portfolio" className="nf-link">
            See our work <ArrowRight />
          </Link>
        </div>
        <figure className="nf-about-story__photo">
          <img
            src={johnAbbott}
            alt="The main building of John Abbott College, a brick building with a clock tower, seen across the lawn in summer"
            width="1024"
            height="498"
            loading="lazy"
            decoding="async"
          />
          <figcaption>John Abbott College, Sainte-Anne-de-Bellevue.</figcaption>
        </figure>
      </div>
    </section>

    <section className="nf-section nf-about-team">
      <div className="nf-wrap nf-grid">
        <div className="nf-about-team__intro">
          <h2 className="nf-h2">Team</h2>
        </div>
        <ul className="nf-about-team__people">
          {team.map((m) => (
            <li key={m.key} className={`nf-founder nf-founder--${m.key}`}>
              <img
                src={portraits[m.key] ?? m.photo}
                alt={m.name}
                width="720"
                height="900"
                loading="lazy"
                decoding="async"
              />
              <h3>{m.name}</h3>
              <p className="nf-founder__role">{m.role}</p>
              <p className="nf-founder__bio">{m.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="nf-section nf-about-work">
      <div className="nf-wrap nf-grid">
        <div className="nf-about-work__intro">
          <h2 className="nf-h2">Working with us</h2>
        </div>
        <ul className="nf-about-work__list">
          {practices.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <CloseCta />
  </div>
);

export default AboutPage;
