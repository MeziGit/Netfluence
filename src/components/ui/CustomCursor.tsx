import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;

      // Add active class when hovering over interactive elements
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        cursor.classList.add("cursor-active");
      } else {
        cursor.classList.remove("cursor-active");
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return null;
};

export default CustomCursor;
