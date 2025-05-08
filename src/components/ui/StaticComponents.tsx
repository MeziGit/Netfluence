import React, { useState, memo, useMemo } from "react";
import { motion } from "framer-motion";
import { StaticComponentProps, StaticCardProps } from "../../types/page";

interface StaticComponentsProps {
  isMobile: boolean;
  isSafari: boolean;
}

// Memoized component implementations to avoid re-renders
const SafariStaticComponent = memo(
  ({ children, className = "" }: StaticComponentProps) => (
    <motion.div
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={className}
      style={{
        transform: "translateZ(0)", // Force hardware acceleration
        willChange: "opacity",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  )
);

const MobileStaticComponent = memo(
  ({ children, className = "" }: StaticComponentProps) => (
    <div
      className={className}
      style={{ willChange: "auto", transform: "translateZ(0)" }}
    >
      {children}
    </div>
  )
);

const DesktopStaticComponent = memo(
  ({ children, className = "" }: StaticComponentProps) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
);

const SafariStaticCard = memo(({ children }: StaticCardProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleTouchStart = () => {
    setIsActive(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 500);
  };

  return (
    <motion.div
      className="card border border-dark-accent/50 relative overflow-hidden"
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      style={{
        transform: "translateZ(0)", // Force hardware acceleration
        willChange: "opacity, transform",
        backfaceVisibility: "hidden",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleTouchStart}
    >
      {/* Simplified background for Safari */}
      <div
        className={`absolute -inset-1 rounded-lg transition-opacity bg-accent/5`}
        style={{
          opacity: isActive ? 0.2 : 0,
          transition: "opacity 0.2s ease",
          filter: "blur(10px)",
        }}
      ></div>

      {children}
    </motion.div>
  );
});

const MobileStaticCard = memo(({ children }: StaticCardProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleTouchStart = () => {
    setIsActive(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 500);
  };

  return (
    <div
      className={`card relative overflow-hidden border ${
        isActive ? "shadow-glow border-accent/30" : "border-dark-accent/50"
      }`}
      style={{
        willChange: "auto",
        transform: "translateZ(0)",
        transition:
          "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleTouchStart} // Also trigger on click for testing on desktop
    >
      {/* Animated background gradient for mobile (activated on touch) */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-accent to-accent-tertiary rounded-lg blur-xl transition-opacity duration-200`}
        style={{
          opacity: isActive ? 0.2 : 0,
          transition: "opacity 0.2s ease",
        }}
      ></div>

      <div
        className="touch-feedback absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: isActive
            ? `rgba(14, 165, 233, 0.05)`
            : "transparent",
          transition: "background-color 0.2s ease",
          transform: "translateZ(0)",
        }}
      />
      {children}
    </div>
  );
});

const DesktopStaticCard = memo(({ children, index = 0 }: StaticCardProps) => (
  <motion.div
    key={index}
    className="card hover:shadow-glow hover:border-accent/30 reveal group relative overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-100px" }}
    whileHover={{
      y: -10,
      borderColor: "rgba(14, 165, 233, 0.3)",
      boxShadow: "0 0 15px 2px rgba(14, 165, 233, 0.3)",
    }}
  >
    {/* Animated background gradient */}
    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-tertiary rounded-lg opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"></div>

    {children}
  </motion.div>
));

// Set display names for React DevTools
SafariStaticComponent.displayName = "SafariStaticComponent";
MobileStaticComponent.displayName = "MobileStaticComponent";
DesktopStaticComponent.displayName = "DesktopStaticComponent";
SafariStaticCard.displayName = "SafariStaticCard";
MobileStaticCard.displayName = "MobileStaticCard";
DesktopStaticCard.displayName = "DesktopStaticCard";

/**
 * A component factory that returns optimized components for different browsers
 */
export const createStaticComponents = ({
  isMobile,
  isSafari,
}: StaticComponentsProps) => {
  // Use useMemo to ensure consistent references for these components
  return useMemo(() => {
    /**
     * Selects the appropriate component implementation based on device/browser
     */
    const StaticComponent = ({
      children,
      className = "",
    }: StaticComponentProps) => {
      if (isSafari) {
        return (
          <SafariStaticComponent className={className}>
            {children}
          </SafariStaticComponent>
        );
      } else if (isMobile) {
        return (
          <MobileStaticComponent className={className}>
            {children}
          </MobileStaticComponent>
        );
      } else {
        return (
          <DesktopStaticComponent className={className}>
            {children}
          </DesktopStaticComponent>
        );
      }
    };

    /**
     * Returns animation properties optimized for Safari
     */
    const getSafariAnimationProps = () => {
      if (isSafari) {
        return {
          initial: {},
          animate: {},
          transition: { duration: 0.1 },
        };
      }
      return {};
    };

    /**
     * Selects the appropriate card implementation based on device/browser
     */
    const StaticCard = ({ children, index = 0 }: StaticCardProps) => {
      if (isSafari) {
        return <SafariStaticCard>{children}</SafariStaticCard>;
      } else if (isMobile) {
        return <MobileStaticCard>{children}</MobileStaticCard>;
      } else {
        return <DesktopStaticCard index={index}>{children}</DesktopStaticCard>;
      }
    };

    return {
      StaticComponent,
      StaticCard,
      getSafariAnimationProps,
    };
  }, [isMobile, isSafari]);
};
