/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#64748b"
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.98)" },
          "100%": { opacity: 1, transform: "scale(1)" }
        }
      }
    }
  },
  plugins: []
};