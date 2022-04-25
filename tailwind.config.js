const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "460px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        "roboto-condensed": ['"Roboto Condensed"', "cursive"],
      },
      transitionProperty: {
        width: "width",
      },
    },
  },

  plugins: [],
};
