const {
  mainPrimary,
  mainBg,
  mainSecondary,
  HeaderLgHeight,
  StickyNavFooterHeight,
  secondBg,
} = require("./src/ThemeVars");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        mainPrimary: mainPrimary,
        mainSecondary: mainSecondary,
        mainBg,
        secondBg,
      },
      spacing: {
        HeaderLgHeight,
        StickyNavFooterHeight,
      },
      animation: {
        scaleUp: "scaleUp 3s linear infinite",
      },
      keyframes: {
        scaleUp: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss")("./src/tailwind.config.js"),
    require("autoprefixer"),
  ],
};
