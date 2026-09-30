const fs = require('fs');
const path = require('path');

// Configuration
const baseUrl = 'https://netfluence.com';
const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.8', changefreq: 'monthly' },
  { url: '/portfolio', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.9', changefreq: 'weekly' }
];

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Create sitemap content
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

// Add each page to the sitemap
pages.forEach(page => {
  sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/${page.url.replace('/', '') || 'hero'}-image.jpg</image:loc>
      <image:title>Netfluence - ${page.url.replace('/', '') || 'Digital Agency'}</image:title>
    </image:image>
  </url>
`;
});

// Close the sitemap
sitemap += `</urlset>`;

// Ensure directory exists
const dir = path.join(__dirname, '../public');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Write sitemap to file
fs.writeFileSync(path.join(dir, 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully!'); 