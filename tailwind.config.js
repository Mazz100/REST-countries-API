/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundColor: {
        'light-theme-background': '#fafafa' /*Very light gray*/,
        'dark-theme-background': '#202c37' /*Very Dark Blue*/,
      },

      colors: {
        'light-theme-text': '#111517' /*Very dark blue for text*/,
        'light-theme-elements': '#ffffff' /*Very light gray*/,
        'dark-theme-elements': '#2b3945' /*Dark blue*/,
        'dark-theme-text': '#ffffff' /*White*/,
      }

    },
  },
  plugins: [],
}

