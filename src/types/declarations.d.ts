declare module 'react';
declare module 'react-dom/client';
declare module 'react-helmet-async';
declare module 'date-fns';
declare module 'react/jsx-runtime';

interface Window {
  dataLayer: any[];
}

// Fix for JSX IntrinsicElements
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
} 