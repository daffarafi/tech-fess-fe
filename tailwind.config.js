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
        success: '#00BA7C',
      },
    },
    container: {
      center: true,
      padding: {
        md: '1rem',
      },
    },
  },
  plugins: [],
}
