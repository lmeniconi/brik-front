/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#F9F5FF',
          200: '#BE84F9',
          300: '#9458D7',
          400: '#9458D7',
          500: '#6941C6',
          600: '#371369',
          700: '#200544',
          800: '#0E0229',
          900: '#0E0229',
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        brikku: {
          primary: '#6941C6',
          'primary-content': '#ffffff',
          secondary: '#BE84F9',
          neutral: '#667085',
          success: colors.green[600],
          info: colors.blue[600],
          warning: colors.amber[600],
          error: colors.red[600],
          'base-100': '#ffffff',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
