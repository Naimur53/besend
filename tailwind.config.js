/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#242B31"
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '14px', }],
        'ls': ['16px', { lineHeight: '22px', }],
        'sm': ['20px', { lineHeight: '28px', }],
        'normal': ['24px', { lineHeight: '28px', }],
        'base': ['36px', { lineHeight: '42px', }],
        'lg': ['40px', { lineHeight: '48px', }],
        'xl': ['48px', { lineHeight: '58px', }],
      },
      fontFamily: {
        'Roboto': ['"Roboto"', 'sans-serif'],
        'Raleway': ['"Raleway"', 'sans-serif']
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
})
