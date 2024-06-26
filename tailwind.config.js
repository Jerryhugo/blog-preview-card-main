/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "yellow": "hsl(47, 88%, 63%)",
        "white": "hsl(0, 0%, 100%)",
        "grey": "hsl(0, 0%, 50%)",
        "black": "hsl(0, 0%, 7%)"
      },
    boxShadow: {
      '2xl': '4px 4px 0px hsl(0, 0%, 7%)'
    }   
    },

    fontFamily: {
      'figtree': ['Figtree', 'sans-serif'],
    }
  },
  plugins: [],
}