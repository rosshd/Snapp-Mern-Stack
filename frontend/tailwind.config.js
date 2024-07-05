/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
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
            transform: "translate(700%,0)",
          },
          "100%": {
            transform: "translate(0,0)",
            
          },
        }
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
