/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "Roboto"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};

