/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: "400px",
      sm: "480px",
      md: "760px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryColor: "#475467",
        customBlack: "#101828",
        label: "#344054",
        resume: "#F9FAFB",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
