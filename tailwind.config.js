/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      tablet: "48rem",
      laptop: "80rem",
    },
    colors: {
      purple: {
        200: "#AD1FEA",
        300: "rgb(173, 31, 234)"
      },
      blue: {
        800: "#4661E6",
        300: "#62BCFA",
      },
      black: {
        600: "#4661E6",
        500: "#3A4374",
        200: "#647196",
        700: "rgb(55, 63, 104)",
      },
      white: {
        900: "#FFFFFF",
        200: "#F2F4FF",
        100: "#F7F8FD",
        300: "rgb(242, 242, 242);",
        400: "rgb(255, 255, 255)",
      },
      red: {
        200: "#F49F85",
      },
    
    },

    extend: {},
  },
  plugins: [],
};
