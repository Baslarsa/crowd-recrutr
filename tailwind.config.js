/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunset: "#007FF3",
      },
      fontFamily: {
        grato: ["Grato Grotesk"],
      },
    },
  },
  plugins: [],
};
