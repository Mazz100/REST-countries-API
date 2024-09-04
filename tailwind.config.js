/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "light-theme-background": "#fafafa" /*Very light gray*/,
        "dark-theme-background": "#202c37" /*Very Dark Blue*/,
      },

      colors: {
        "light-theme-text": "#111517" /*Very dark blue for text*/,
        "light-theme-elements": "#ffffff" /*Very light gray*/,
        "dark-theme-elements": "#2b3945" /*Dark blue*/,
        "dark-theme-text": "#ffffff" /*White*/,
      },

      fontFamily: {
        "Neunito-font": ["Nunito", "sans-serif"],
      },

      animation: {
        popDown: "popDown 0.1s cubic-bezier(0, 0, 0.2, 1)",
      },

      keyframes: {
        popDown: {
          "0%": {
            transform: "scale(0.9);",
          },
          "100%": {
            transform: "scale(1);",
          },
        },
      },
    },
    plugins: [],
  },
};
