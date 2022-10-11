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
      'bg-dark': '#1D1D1D', 
      'bg-primary': '#ffffff',
      'primary': "#000000",
      'secondary': '#707070',
      'accent': '#EF5B37',
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'outlet-illustration': "url('./src/assets/outlet-1.png')",
      }
    },
  },
  plugins: [],
}
