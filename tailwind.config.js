const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    '_includes/**/*.html',
   '_includes/**/*.njk',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#a5a58d",
          dark: "#6b705c",
        }
      },
      fontFamily: {
        serif: ['Cutive\\ Mono', ...defaultTheme.fontFamily.serif],
        brand: ['Cutive\\ Mono', ...defaultTheme.fontFamily.serif]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
