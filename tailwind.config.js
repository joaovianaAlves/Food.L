/** @type {import('tailwindcss').Config} */

const { color } = require('framer-motion')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{ts,jsx,tsx,js}"],
  theme: {
    extend: {
      fontFamily: {

        mont : ['var(--font-mont)', ...fontFamily.sans],
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9"
      }
    },
  },
  plugins: [],
}

