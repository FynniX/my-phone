/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sf-pro": ['"SF Pro"', "sans-serif"],
      },
      colors: {
        red: {
          DEFAULT: "#ff453a",
        },
        blue: {
          DEFAULT: "#4692ff",
        },
      },
    },
  },
  plugins: [],
};
