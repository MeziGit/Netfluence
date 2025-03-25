/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: '#0ea5e9',
          light: '#38bdf8',
          dark: '#0284c7',
          secondary: '#10b981',
          tertiary: '#8b5cf6',
        },
        gray: {
          750: '#2d3748',
          850: '#1a202c',
          950: '#0f1117',
        },
        dark: {
          bg: '#030712',
          card: '#111827',
          accent: '#1f2937',
        },
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          accent: '#f1f5f9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 15px 2px rgba(14, 165, 233, 0.3)',
        'glow-secondary': '0 0 15px 2px rgba(16, 185, 129, 0.3)',
        'glow-tertiary': '0 0 15px 2px rgba(139, 92, 246, 0.3)',
        'dark-card': '0 4px 20px rgba(0, 0, 0, 0.5)',
        'light-card': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'abstract-dark': 'url("/images/abstract-dark.svg")',
        'abstract-light': 'url("/images/abstract-light.svg")',
        'grid-dark': 'linear-gradient(to right, #111827 1px, transparent 1px), linear-gradient(to bottom, #111827 1px, transparent 1px)',
        'grid-light': 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
        'code-pattern': 'url("/images/code-pattern.svg")',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 10s infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'scale(1) translate(0px, 0px)' },
          '33%': { transform: 'scale(1.1) translate(30px, -30px)' },
          '66%': { transform: 'scale(0.9) translate(-30px, 30px)' },
          '100%': { transform: 'scale(1) translate(0px, 0px)' },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
} 