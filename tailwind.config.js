const { snapshot } = require('node:test');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        serif: ['"EB Garamond"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        orangeraie: "#926d53",
      },
      animation: {
        'slide-fade': 'slideFade 0.3s ease-out',
      },
      keyframes: {
        slideFade: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      screens: {
        'custom': '1025px'
      },
    },
  },
  plugins: [],
}
