/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#FFDD0F",
        "main" : "#F8F8F8",
      },
      fontFamily:{
        "hanuman" : ["Hanuman", "sans-serif"],
        "Popins" : ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

