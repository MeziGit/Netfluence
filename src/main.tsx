import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";
import App from "./App";
import "./index.css";

// Add global styles for tailwind components
import "./styles/globals.css";
import "./styles/site.css";
import "./styles/components.css";

// Keep this provider tree identical to entry-server.jsx.
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// Production pages arrive pre-rendered (scripts/prerender.js), so React attaches to that
// HTML instead of rebuilding it. The dev server sends an empty root.
const root = document.getElementById("root") as HTMLElement;
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
