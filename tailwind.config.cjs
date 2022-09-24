/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "blue-100": "#EAF2FE",
        "blue-300": "#669EF4",
        "blue-800": "#434C50",
        "blue-200": "#7C8287",
        "blue-50": "#F3F4F8",
        "blue-80": "#C8CDD0",
        "red-300": "#EA4436",
      },
    },
  },
  plugins: [],
};
