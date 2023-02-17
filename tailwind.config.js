const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#01162D',
        secondary: '#88BFE8',
        danger: '#FF7070',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
  },
  plugins: [],
}
