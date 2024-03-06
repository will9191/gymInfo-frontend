/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8931F",
        secondary: "#2A1E17",
      },
      fontFamily: {
        body: ["Comfortaa"],
      },
    },
  },
  plugins: [],
};
