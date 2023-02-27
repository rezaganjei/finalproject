/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6769",
        secondary: "#263859",
        tertiary: "#5B606B",
        backgrey: "#F3F3F3",
        textgrey: "#7B7B7B",
      },
    },
  },
  plugins: [],
};
