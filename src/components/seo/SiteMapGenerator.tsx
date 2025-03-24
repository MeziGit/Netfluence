import React from 'react';
// Using browser-compatible approach instead of Node.js fs
// import fs from 'fs';
// import path from 'path';
import { format } from 'date-fns';

interface SiteMapRoute {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
}

interface SiteMapGeneratorProps {
  domain: string;
  routes: SiteMapRoute[];
  outputPath: string;
}

const generateSiteMap = ({ domain, routes, outputPath }: SiteMapGeneratorProps): string => {
  const baseUrl = domain.endsWith('/') ? domain.slice(0, -1) : domain;
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    const url = `${baseUrl}${route.path}`;
    const lastmod = route.lastmod || format(new Date(), 'yyyy-MM-dd');
    
    sitemap += '  <url>\n';
    sitemap += `    <loc>${url}</loc>\n`;
    sitemap += `    <lastmod>${lastmod}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  // Browser-compatible approach instead of using Node.js fs module
  // fs.writeFileSync(path.join(process.cwd(), outputPath), sitemap);
  console.log(`Sitemap generated for ${domain}`);
  
  return sitemap;
};

export default generateSiteMap; 