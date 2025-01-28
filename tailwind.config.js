/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      museomoderno: ["MuseoModerno", "serif"],
      poppins: ["Poppins", "serif"],
    },
    extend: {
      colors: {
        main: "#824D5C",
        secondary: "#C1A3A1",
        third: "#F5EFEB",
      },
    },
  },
  plugins: [],
};
