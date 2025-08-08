/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
        blink: 'blink 1s step-start 0s infinite',
        pulseOnce: 'pulseOnce 1s ease-in-out',
        slideIn: 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(5px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        blink: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulseOnce: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
