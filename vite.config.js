import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    // scripts/prerender.js reads the manifest to link each page's CSS and JS chunks.
    manifest: !isSsrBuild,
    minify: "esbuild",
    rollupOptions: {
      // The server build leaves node_modules external, so these chunks don't apply to it.
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              "react-vendor": ["react", "react-dom"],
              "framer-motion": ["framer-motion"],
              "react-router": ["react-router-dom"],
            },
          },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    target: "es2015",
  },
  server: {
    hmr: {
      overlay: false,
    },
    open: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion"],
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
}));
