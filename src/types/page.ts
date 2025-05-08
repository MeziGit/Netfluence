// Page Props Interface
export interface PageProps {
  isMobile?: boolean;
  isSafari?: boolean;
}

// Component Props with Children
export interface StaticComponentProps {
  children: React.ReactNode;
  className?: string;
}

// Card Props
export interface StaticCardProps {
  children: React.ReactNode;
  index?: number;
}

// Animation Props
export interface SafariAnimationProps {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
  };
}
