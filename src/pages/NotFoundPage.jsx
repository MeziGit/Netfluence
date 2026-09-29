import React from "react";
import { PageMeta } from "../components/site/PageMeta";
import { Link } from "react-router-dom";
import { ArrowRight, PageHero } from "../components/site/blocks";
import "../styles/pages/notfound.css";

const elsewhere = [
  { to: "/portfolio", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const NotFoundPage = () => (
  <div className="nf-page nf-404">
    <PageMeta path="404" />

    <PageHero
      label="404"
      lines={["We can’t find", "that page."]}
      lede="The link may be out of date, or the address may have a typo."
    >
      <div className="nf-404__actions">
        <Link to="/" className="nf-btn nf-btn--primary">
          Back to the homepage
        </Link>
        <nav aria-label="Other pages">
          <ul className="nf-404__links">
            {elsewhere.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="nf-link">
                  {l.label} <ArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </PageHero>
  </div>
);

export default NotFoundPage;
