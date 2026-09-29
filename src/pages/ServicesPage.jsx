import React from "react";
import { PageMeta } from "../components/site/PageMeta";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CloseCta,
  PageHero,
  Process,
} from "../components/site/blocks";
import { projects, services } from "../data/site";
import "../styles/pages/services.css";

const websiteProjects = projects.filter((p) => p.kind === "Website");

/* ---------- Shared pieces ---------- */

const Head = ({ s, n, children }) => (
  <div className="nf-svc__head">
    <p className="nf-svc__num" aria-hidden="true">
      {String(n).padStart(2, "0")}
    </p>
    <h2 id={`${s.slug}-title`} className="nf-h2">
      {s.title}
    </h2>
    {children}
  </div>
);

// A client site as proof: screenshot, name, and the live domain.
const Shot = ({ p, large = false }) => (
  <a
    href={p.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`nf-shot${large ? " nf-shot--large" : ""}`}
  >
    <span className="nf-shot__media">
      <img
        src={p.image}
        alt={`${p.name} website`}
        width="1200"
        height="750"
        loading="lazy"
        decoding="async"
      />
    </span>
    <span className="nf-shot__name">{p.name}</span>
    {large && <span className="nf-shot__desc">{p.description}</span>}
    <span className="nf-shot__url">
      {p.domain} <ArrowUpRight />
    </span>
  </a>
);

/* ---------- Websites ---------- */

const Websites = ({ s, n }) => (
  <>
    <Head s={s} n={n}>
      <p className="nf-svc__body">
        New sites, and rebuilds of ones that have aged. We design each site
        around your business and the people who buy from you, then build it to
        load fast and read well on a phone. Most of our sites are built with
        React; we also work in WordPress.
      </p>
    </Head>

    <div className="nf-svc__incl">
      <h3 className="nf-svc__h3">What’s included</h3>
      <ul className="nf-svc__list">
        <li>Page designs you see and approve before we build</li>
        <li>Pages that work on any phone, tablet or computer</li>
        <li>Fast loading, and a structure search engines can read</li>
        <li>A way to edit your own content, if you want one</li>
        <li>
          Features your business needs, like booking, a store directory or
          bilingual pages
        </li>
      </ul>
    </div>

    <div className="nf-svc__work">
      <div className="nf-svc__work-head">
        <h3 className="nf-svc__h3">Websites we’ve built</h3>
        <Link to="/portfolio" className="nf-link">
          All projects <ArrowRight />
        </Link>
      </div>
      <div className="nf-mosaic">
        {websiteProjects.map((p, i) => (
          <Shot key={p.name} p={p} large={i === 0} />
        ))}
      </div>
    </div>
  </>
);

/* ---------- Custom software ---------- */

const kinds = [
  {
    title: "Internal tools",
    text: "A screen your staff use instead of a shared spreadsheet, for things like taking orders, tracking jobs or managing stock.",
  },
  {
    title: "Dashboards",
    text: "The numbers you check every week, pulled into one place instead of five separate exports.",
  },
  {
    title: "Automations",
    text: "Work someone does by hand every day, like sending confirmations, preparing invoices or copying data from one system to another.",
  },
  {
    title: "Integrations",
    text: "Getting the systems you already pay for, such as your website, accounting and booking tools, to pass information to each other.",
  },
];

const Software = ({ s, n }) => (
  <>
    <Head s={s} n={n}>
      <p className="nf-svc__body">
        Some problems a website won’t solve. When a job in your business runs on
        spreadsheets, copy and paste, or tools that don’t talk to each other, we
        can build software around the way you already work.
      </p>
      <p className="nf-svc__note">
        We also replace older systems, design databases, and test and maintain
        the software we build.
      </p>
      <Link to="/contact" className="nf-link nf-svc__cta">
        Describe the problem to us <ArrowRight />
      </Link>
    </Head>

    <ul className="nf-kinds">
      {kinds.map((k) => (
        <li key={k.title}>
          <h3>{k.title}</h3>
          <p>{k.text}</p>
        </li>
      ))}
    </ul>
  </>
);

/* ---------- Web and mobile apps ---------- */

const Apps = ({ s, n }) => (
  <>
    <Head s={s} n={n}>
      <p className="nf-svc__body">
        Apps your customers or your team sign into: booking systems, product
        catalogues, member areas. We build web apps that run in any browser,
        installable web apps (PWAs), and mobile apps for iOS and Android.
      </p>
    </Head>

    <div className="nf-svc__incl">
      <h3 className="nf-svc__h3">What’s included</h3>
      <ul className="nf-svc__list">
        <li>Accounts and sign-in</li>
        <li>Connections to the other services you use</li>
        <li>Updates and fixes after launch</li>
      </ul>
    </div>
  </>
);

/* ---------- Hosting and maintenance ---------- */

const care = [
  ["Hosting", "Your website, database and servers, set up and run by us"],
  ["Updates", "Security and software updates, applied for you"],
  ["Backups", "Regular backups, so a mistake or a failure can be undone"],
  ["Monitoring", "We watch for downtime and security issues"],
  [
    "Speed",
    "A content delivery network (CDN), so pages load quickly wherever your visitors are",
  ],
  ["Room to grow", "More capacity when your traffic grows"],
];

const Hosting = ({ s, n }) => (
  <>
    <Head s={s} n={n}>
      <p className="nf-svc__body">
        A site needs looking after once it’s live. We host and maintain it, and
        keep it secure and up to date. When something needs changing, you email
        or call the same people who built it.
      </p>
    </Head>

    <dl className="nf-care">
      {care.map(([term, detail]) => (
        <div key={term}>
          <dt>{term}</dt>
          <dd>{detail}</dd>
        </div>
      ))}
    </dl>
  </>
);

/* ---------- Page ---------- */

// Section ids are the service slugs; the homepage links to /services#<slug>.
const bodies = {
  websites: Websites,
  software: Software,
  applications: Apps,
  hosting: Hosting,
};

const Fallback = ({ s, n }) => (
  <Head s={s} n={n}>
    <p className="nf-svc__body">{s.description}</p>
  </Head>
);

const ServicesPage = () => (
  <div className="nf-page nf-services-page">
    <PageMeta path="/services" />

    <PageHero
      label="Services"
      lines={["What we build", "and look after."]}
      lede="We build websites, custom software, and web and mobile apps for businesses in and around Montréal, then host and maintain them. Most clients start with a website."
    >
      <nav aria-label="Services on this page">
        <ul className="nf-svc-index">
          {services.map((s) => (
            <li key={s.slug}>
              <Link to={`/services#${s.slug}`}>{s.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </PageHero>

    {services.map((s, i) => {
      const Body = bodies[s.slug] || Fallback;
      return (
        <section
          key={s.slug}
          id={s.slug}
          aria-labelledby={`${s.slug}-title`}
          className={`nf-svc nf-svc--${s.slug}`}
        >
          <div className="nf-wrap nf-grid">
            <Body s={s} n={i + 1} />
          </div>
        </section>
      );
    })}

    <section className="nf-section nf-svc-process">
      <div className="nf-wrap nf-grid">
        <div className="nf-svc-process__intro">
          <h2 className="nf-h2">How a project runs</h2>
          <p className="nf-lede">
            A website, an app or a piece of software goes through the same four
            steps, with the same two people from the first call to launch day.
          </p>
        </div>
        <div className="nf-svc-process__steps">
          <Process />
        </div>
      </div>
    </section>

    <CloseCta />
  </div>
);

export default ServicesPage;
