// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react()]
  // Other configurations...
  ,
  output: "server",
  adapter: netlify({
    edgeMiddleware: true
  }),
});