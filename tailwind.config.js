/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif']
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
      }
    },
  },
  plugins: [],
}
