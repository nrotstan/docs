const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'black-15': 'rgba(0, 0, 0, .15)',
        green: {
          default: '#47725F',
        },
        blue: {
          default: '#172E51',
        },
      },
      boxShadow: {
        inner: 'inset 0 1px 3px 0 rgba(0,0,0,0.3)',
      },
    },
    linearGradientColors: (theme) => ({
      'green-blue': [
        theme('colors.green.default'),
        theme('colors.blue.default'),
      ],
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/ui'), require('tailwindcss-gradients')],
}