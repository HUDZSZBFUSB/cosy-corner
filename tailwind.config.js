/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        "ink-soft": "#000000cf",
        border: "#0000000f",
        sale: "#d0021b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        btn: "14px",
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};
