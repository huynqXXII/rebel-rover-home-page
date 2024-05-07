/** @type {import('tailwindcss').Config} */
module.exports = {
  //mode: "jit", ==> ??
  //purge: ["./*.html"], ==> ??
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // width: {
      //   'cols-3': 'calc((100% - ) / 3)',
      // }
    },
    fontFamily: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      nav: "rgba(18, 11, 11, 0.51)",
      white: "#ffffff",
      black: "#000000",
      "white-blur": "rgba(255, 255, 255, 0.8)",
      "white-blur-2": "#cfcfcf",
      "gray-blur": "#9B9B9B",
    },
    backgroundImage: {
      header: "url('../images/header-bg.jpg')",
      "why-choose-us": "url('../images/why-choose/why-choose-bg.png')",
    },
  },
  plugins: [],
};
