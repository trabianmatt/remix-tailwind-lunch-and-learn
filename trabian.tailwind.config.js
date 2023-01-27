const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        highlight: colors.red,
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
