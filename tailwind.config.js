const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern:
        /(text|border|bg)-(red|orange|yellow|green|blue|indigo|purple|stone)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus'],
    },
  ],
  theme: {
    extend: {
      colors: {
        blue: colors.sky,
      },
      rotate: {
        15: '15deg',
        20: '20deg',
        30: '30deg',
      },
    },
    fontFamily: {
      sans: ['Linux Biolinum O', 'sans-serif'],
      serif: ['Linux Libertine O', 'LXGW WenKai', 'serif'],
      // NOTE One Chinese character should equal to two English characters.
      mono: ['Fira Code', 'LXGW WenKai Larger', 'monospace'],
      logo: ['Bodoni Moda', 'Source Han Serif SC', 'serif'],
    },
  },
}
