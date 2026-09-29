// Build-time only: renders one route to HTML for scripts/prerender.js. Keep the provider
// tree identical to main.tsx, or the browser can't hydrate the result.
import React from "react";
import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "./context/ThemeContext";
import App from "./App";

export const render = (url) =>
  new Promise((resolve, reject) => {
    let html = "";
    const sink = new Writable({
      write(chunk, _encoding, done) {
        html += chunk;
        done();
      },
      final(done) {
        resolve(html);
        done();
      },
    });

    // onAllReady waits for the lazy page chunk, so the page's content is in the output
    // rather than the loading spinner. Any render error fails the build.
    const stream = renderToPipeableStream(
      <HelmetProvider context={{}}>
        <ThemeProvider>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </ThemeProvider>
      </HelmetProvider>,
      {
        onAllReady: () => stream.pipe(sink),
        onShellError: reject,
        onError: reject,
      },
    );
  });
