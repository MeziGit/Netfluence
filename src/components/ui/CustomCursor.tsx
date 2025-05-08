import React, { useEffect } from "react";
import { isSafariBrowser } from "../../utils/browserDetection";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    // Check if Safari
    const isSafari = isSafariBrowser();

    if (isSafari) {
      // For Safari, hide custom cursor and restore default cursor
      cursor.style.display = "none";
      document.documentElement.classList.add("safari");
      return;
    }

    // Add class to hide system cursor for non-Safari browsers
    document.documentElement.classList.add("custom-cursor-enabled");

    // Simple implementation for non-Safari browsers
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth performance
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        // Check for interactive elements
        const target = e.target as HTMLElement;
        const isClickable =
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.classList.contains("cursor-pointer");

        if (isClickable) {
          cursor.classList.add("cursor-active");
        } else {
          cursor.classList.remove("cursor-active");
        }
      });
    };

    // Add event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

      // Remove the class when component unmounts
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
  }, []);

  return null;
};

export default CustomCursor;
