// Runs after the client and server builds. For each route it writes an HTML file with the
// page's <head> tags and its fully rendered content, so crawlers that don't run JavaScript
// (AI crawlers, link previews, some search engines) see the real page. Also writes
// sitemap.xml from the same route list.

import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { SITE_URL, headTags, pages } from "../src/data/meta.js";

const dist = new URL("../dist/", import.meta.url);
const serverDist = new URL("../dist-server/", import.meta.url);
const MARKER = "<!--page-meta-->";
const ROOT = '<div id="root"></div>';

const template = readFileSync(new URL("index.html", dist), "utf8");
for (const needle of [MARKER, ROOT]) {
  if (!template.includes(needle)) throw new Error(`dist/index.html is missing ${needle}`);
}

const manifest = JSON.parse(readFileSync(new URL(".vite/manifest.json", dist), "utf8"));
const { render } = await import(new URL("entry-server.js", serverDist));

const escape = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// data-rh marks the tags as Helmet's, so Helmet replaces them instead of adding duplicates.
const renderTag = ({ tag, attrs, json }) => {
  const attrString = Object.entries({ ...attrs, "data-rh": "true" })
    .map(([key, value]) => `${key}="${escape(value)}"`)
    .join(" ");
  if (json) {
    const body = JSON.stringify(json).replace(/</g, "\\u003c");
    return `<${tag} ${attrString}>${body}</${tag}>`;
  }
  return `<${tag} ${attrString} />`;
};

// The page's lazy chunk and everything it imports. Linking its CSS up front keeps the
// pre-rendered content from showing unstyled until the JavaScript loads it. These go at the
// end of <head>, after the shared stylesheet, which is where Vite would add them later.
const pageAssets = (source) => {
  const css = new Set();
  const js = new Set();
  const visit = (key) => {
    const chunk = manifest[key];
    if (!chunk || js.has(chunk.file)) return;
    js.add(chunk.file);
    chunk.css?.forEach((file) => css.add(file));
    chunk.imports?.forEach(visit);
  };
  if (!manifest[source]) throw new Error(`${source} is not in the Vite manifest`);
  visit(source);
  const fresh = (file) => !template.includes(`/${file}"`);
  return [
    ...[...css].filter(fresh).map((file) => `<link rel="stylesheet" crossorigin href="/${file}">`),
    ...[...js].filter(fresh).map((file) => `<link rel="modulepreload" crossorigin href="/${file}">`),
  ];
};

for (const page of pages) {
  const { title, tags } = headTags(page.path);
  const body = await render(page.noindex ? "/404" : page.path);
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
    .replace(MARKER, tags.map(renderTag).join("\n    "))
    .replace("</head>", `  ${pageAssets(page.source).join("\n    ")}\n</head>`)
    .replace(ROOT, `<div id="root">${body}</div>`);
  writeFileSync(new URL(page.file, dist), html);
}

const urls = pages
  .filter((p) => !p.noindex)
  .map((p) => `  <url><loc>${SITE_URL}${p.path}</loc></url>`)
  .join("\n");

writeFileSync(
  new URL("sitemap.xml", dist),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

rmSync(serverDist, { recursive: true, force: true });
console.log(`prerender: wrote ${pages.length} pages and sitemap.xml`);
