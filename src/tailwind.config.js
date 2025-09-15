/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // or ./pages/**/*.{js,ts,jsx,tsx} if you use pages
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // enable class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
