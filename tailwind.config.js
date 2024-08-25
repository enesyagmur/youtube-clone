/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      height: {
        108: "27rem",
        120: "30rem",
        132: "33rem",
        144: "36rem",
        156: "39rem",
        168: "42rem",
        180: "45rem",
      },
    },
  },
  plugins: [],
};
