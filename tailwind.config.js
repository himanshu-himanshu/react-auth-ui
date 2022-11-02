/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Slab", "serif"],
      },
      backgroundImage: {
        hero: "url('/src/assets/bg3.jpg')",
      },
    },
  },
  plugins: [],
};
