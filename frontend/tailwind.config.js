/** @type {import('tailwindcss').Config} */

import { loadConfigFromFile } from 'vite';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1600px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
      },
      transitionDelay: {
        '2000': '2000ms',
        '4000': '4000ms',
        '6000': '6000ms',
      },
      animation: {
        "text-reveal": "text-reveal 2s",
        "infinite-scroll": "infinite-scroll linear 8s infinite",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(-250%, 0)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        "infinite-scroll": {
          "0%": {
            transform: "translate(800%,0)",
          },
          "100%": {
            transform: "translate(0,0)",
            
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
