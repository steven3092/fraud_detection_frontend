/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        customBlue: "#1428A0",
        customRed: "#FF4757",
        customTeal: "#00C7B7",
        customTealHover: "#00A296",
      },
    },
  },
  plugins: [],
};
