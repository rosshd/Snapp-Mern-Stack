/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      animation: {
        "text-reveal": "text-reveal 2s",
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
        
      },
    },
  },
  plugins: [],
}
