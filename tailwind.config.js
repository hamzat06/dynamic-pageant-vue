/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#162F45",
        lightprimary: "#214869",
        secondary: "#f6c542",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
