const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Spartan'", ...fontFamily.sans],
      },
    },
    colors: {
      night: '#0B0C10',
      evening: '#1F2833',
      drapes: '#2E3D4F',
      teeth: '#C5C6C7',
      ocean: '#66FCF1',
      giant: '#FC0E49',
      blood: '#D10337',
      hearth: '#FF3A6B',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
