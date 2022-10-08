/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000', 
      'bg-primary': '#ffffff',
      'primary': "#000000",
      'secondary': '#707070',
      'accent': '#EF5B37',
    },
    extend: {},
  },
  plugins: [],
}
