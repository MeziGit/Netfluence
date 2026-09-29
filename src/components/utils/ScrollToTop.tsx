import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// On navigation: go to the #anchor if the URL has one, otherwise to the top.
// Pages are lazy-loaded, so the anchor may not exist yet; retry for a short while.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    let frame = 0;
    let tries = 0;
    const find = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView({ block: "start" });
      } else if (tries++ < 60) {
        frame = requestAnimationFrame(find);
      } else {
        window.scrollTo(0, 0);
      }
    };
    find();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
