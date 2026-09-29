// Business facts and per-page metadata. No image imports: scripts/prerender.js loads
// this file in Node at build time to write each page's <head>, and PageMeta renders the same
// tags in the browser, so the two can't drift apart.

export const SITE_URL = "https://netfluence.ca";
const OG_IMAGE = `${SITE_URL}/images/netfluence-og.jpg`;

export const contact = {
  email: "info@netfluence.ca",
  phone: "514-792-7781",
  phoneHref: "tel:+15147927781",
  city: "Montréal, QC",
  linkedin: "https://www.linkedin.com/company/netfluenceinc/",
  instagram: "https://www.instagram.com/netfluenceinc/",
};

export const services = [
  {
    slug: "websites",
    title: "Websites",
    description:
      "New sites and rebuilds of old ones, built to load fast and work well on any phone.",
  },
  {
    slug: "software",
    title: "Custom software",
    description:
      "Software built around how your business runs: internal tools, dashboards, automations, and connections between the systems you already use.",
  },
  {
    slug: "applications",
    title: "Web and mobile apps",
    description:
      "Apps your customers or team sign into, like booking systems, product catalogues and member areas.",
  },
  {
    slug: "hosting",
    title: "Hosting and maintenance",
    description:
      "We host and maintain your website, database and servers, and keep them secure and up to date.",
  },
];

// Every route the app serves. `file` is where the build writes its HTML in dist/, and
// `source` is the page component, used to link its CSS and JS from the Vite manifest.
export const pages = [
  {
    path: "/",
    source: "src/pages/HomePage.jsx",
    file: "index.html",
    name: "Home",
    title: "Web Design & Development in Montréal | Netfluence",
    description:
      "Netfluence is a two-person development studio in Montréal. We design, build and host websites, web apps and custom software for local businesses.",
  },
  {
    path: "/services",
    source: "src/pages/ServicesPage.jsx",
    file: "services.html",
    name: "Services",
    title: "Websites, Custom Software, Apps & Hosting in Montréal | Netfluence",
    description:
      "Websites, custom software, web and mobile apps, and hosting and maintenance for businesses in and around Montréal, from a two-person development studio.",
  },
  {
    path: "/portfolio",
    source: "src/pages/PortfolioPage.jsx",
    file: "portfolio.html",
    name: "Work",
    title: "Our Work: Websites for Montréal Businesses | Netfluence",
    description:
      "Five live client websites by Netfluence, a two-person studio in Montréal: a fish market, an electronics sales agency, a shopping centre, a towing company and a marketing agency.",
  },
  {
    path: "/about",
    source: "src/pages/AboutPage.jsx",
    file: "about.html",
    name: "About",
    title: "About Netfluence | Web Developers in Montréal",
    description:
      "Netfluence is Ryan Meziane and Kui Hua Wang, a development studio in Montréal that designs, builds and hosts websites and software for local businesses.",
  },
  {
    path: "/contact",
    source: "src/pages/ContactPage.jsx",
    file: "contact.html",
    name: "Contact",
    title: "Contact | Web and App Development in Montréal | Netfluence",
    description:
      "Tell us about your project. Send the form, email info@netfluence.ca or call 514-792-7781, and one of us will get back to you with questions and next steps.",
  },
  {
    path: "404",
    source: "src/pages/NotFoundPage.jsx",
    file: "404.html",
    title: "Page not found | Netfluence",
    description:
      "This page doesn’t exist on the Netfluence site. Head back to the homepage, or go to our work, services or contact page.",
    noindex: true,
  },
];

const ORG_ID = `${SITE_URL}/#organization`;

const organization = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "Netfluence",
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: OG_IMAGE,
  description:
    "Web, app and software development studio in Montréal, with hosting and maintenance.",
  email: contact.email,
  telephone: "+1-514-792-7781",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montreal",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  areaServed: { "@type": "City", name: "Montreal" },
  founder: [
    { "@type": "Person", name: "Ryan Meziane" },
    { "@type": "Person", name: "Kui Hua Wang" },
  ],
  sameAs: [contact.linkedin, contact.instagram],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        url: `${SITE_URL}/services#${s.slug}`,
      },
    })),
  },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Netfluence",
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
};

const url = (path) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

// The <head> tags for one page, as plain data: PageMeta turns them into JSX, the build script
// into HTML strings.
export const headTags = (path) => {
  const page = pages.find((p) => p.path === path) ?? pages.find((p) => p.noindex);
  const tags = [
    { tag: "meta", attrs: { name: "description", content: page.description } },
  ];

  if (page.noindex) {
    tags.push({ tag: "meta", attrs: { name: "robots", content: "noindex, follow" } });
    return { title: page.title, tags };
  }

  const graph = [organization, websiteSchema];
  if (page.path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: url("/") },
        { "@type": "ListItem", position: 2, name: page.name, item: url(page.path) },
      ],
    });
  }

  tags.push(
    { tag: "link", attrs: { rel: "canonical", href: url(page.path) } },
    { tag: "meta", attrs: { property: "og:type", content: "website" } },
    { tag: "meta", attrs: { property: "og:site_name", content: "Netfluence" } },
    { tag: "meta", attrs: { property: "og:locale", content: "en_CA" } },
    { tag: "meta", attrs: { property: "og:url", content: url(page.path) } },
    { tag: "meta", attrs: { property: "og:title", content: page.title } },
    { tag: "meta", attrs: { property: "og:description", content: page.description } },
    { tag: "meta", attrs: { property: "og:image", content: OG_IMAGE } },
    { tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
    { tag: "meta", attrs: { property: "og:image:height", content: "630" } },
    { tag: "meta", attrs: { property: "og:image:alt", content: "Netfluence, web and software development in Montréal" } },
    { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", attrs: { name: "twitter:title", content: page.title } },
    { tag: "meta", attrs: { name: "twitter:description", content: page.description } },
    { tag: "meta", attrs: { name: "twitter:image", content: OG_IMAGE } },
    {
      tag: "script",
      attrs: { type: "application/ld+json" },
      json: { "@context": "https://schema.org", "@graph": graph },
    },
  );
  return { title: page.title, tags };
};
