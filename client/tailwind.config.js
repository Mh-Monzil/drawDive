/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "'Poppins', sans-serif"
      },
      boxShadow: {
        'bottom': '0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 2px 2px -2px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "night"],
  },
}

