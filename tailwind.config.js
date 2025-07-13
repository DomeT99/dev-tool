/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D3142",
        secondary: "#BFC0C0",
        accent: "#EF8354",
        background: "#F5F5F5",
        surface: "#FFFFFF",
        muted: "#4F5D75",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "Arial", "sans-serif"],
        heading: ["Montserrat", "Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        md: "0.75rem",
      },
      boxShadow: {
        minimal: "0 2px 8px 0 rgba(45, 49, 66, 0.05)",
      },
    },
  },
  plugins: [],
};
