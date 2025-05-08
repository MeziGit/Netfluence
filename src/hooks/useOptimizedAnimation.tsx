import { useMemo } from "react";
import { isSafariBrowser } from "../utils/browserDetection";

/**
 * Simplified hook to optimize animations, especially for Safari browser
 */
export const useOptimizedAnimation = (
  animations: Record<string, any[]>,
  options: {
    duration?: number;
    repeat?: number | boolean;
    delay?: number;
    ease?: string;
  } = {}
) => {
  const {
    duration = 8,
    repeat = Infinity,
    delay = 0,
    ease = "easeInOut",
  } = options;

  // Detect if we're in Safari
  const isSafari = isSafariBrowser();

  return useMemo(() => {
    // For Safari - drastically simplified animations
    if (isSafari) {
      // Simplify by using only first and last points for each animation property
      const simplifiedAnimate: Record<string, any> = {};

      Object.entries(animations).forEach(([key, values]) => {
        if (values.length >= 2) {
          // Just use start and end values
          simplifiedAnimate[key] = [values[0], values[values.length - 1]];
        } else {
          simplifiedAnimate[key] = values;
        }
      });

      return {
        animate: simplifiedAnimate,
        transition: {
          duration: Math.min(duration, 1), // Shorter duration for Safari
          repeat,
          ease,
          delay,
        },
        style: {
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        },
      };
    }

    // For other browsers - use original animations but with hardware acceleration
    return {
      animate: animations,
      transition: {
        duration,
        repeat,
        ease,
        delay,
      },
      style: {
        // Still add some hardware acceleration for all browsers
        willChange: "transform",
        transform: "translateZ(0)",
      },
    };
  }, [animations, duration, repeat, ease, delay, isSafari]);
};

/**
 * Simple helper to create a blur animation element with optimized properties
 */
export const createOptimizedBlurElement = (props: {
  color: string;
  position: any;
  size: number;
  className?: string;
}) => {
  const { color, position, size, className = "" } = props;
  const isSafari = isSafariBrowser();

  // Drastically simplified animation for Safari
  const animate = isSafari
    ? { scale: [0.95, 1.05, 0.95] } // Single scale animation
    : {
        x: [0, 10, 0],
        y: [0, 15, 0],
      };

  const animProps = useOptimizedAnimation(animate, {
    duration: isSafari ? 2 : 8,
    repeat: Infinity,
  });

  return {
    className: `${className} rounded-full blur-3xl absolute`,
    style: {
      background: color,
      width: size,
      height: size,
      opacity: isSafari ? 0.1 : 0.2, // Less opacity for Safari
      filter: isSafari ? "blur(20px)" : "blur(40px)", // Less blur for Safari
      ...position,
      ...animProps.style,
    },
    animate: animProps.animate,
    transition: animProps.transition,
  };
};

export default useOptimizedAnimation;
