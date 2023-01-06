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
        sand: "#e1dfd7",
      },
      fontFamily: {
        grato: ["Grato Grotesk"],
      },
      keyframes: {
        gradient: {
          "0%": { color: "#face20" },
          "20%": { color: "#436620" },
          "40%": { color: "#126487" },
          "60%": { color: "#581287" },
          "80%": { color: "##87122f" },
          "100%": { color: "#face20" },
        },
      },
      animation: {
        "color-trip": "gradient 15s linear infinite",
      },
    },
  },
  plugins: [],
};
