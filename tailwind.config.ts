import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern:
        /(text|border|bg)-(red|orange|yellow|green|blue|indigo|purple|stone)-(300|400|800)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        blue: colors.sky,
        yellow: colors.amber,
      },
      rotate: {
        20: '20deg',
      },
      listStyleType: {
        square: 'square',
      },
    },
    fontFamily: {
      sans: ['Linux Biolinum O', 'Source Han Serif SC', 'sans-serif'],
      serif: ['Linux Libertine O', 'LXGW WenKai', 'serif'],
      // NOTE One Chinese character should equal to two English characters.
      mono: ['Fira Code', 'LXGW WenKai Larger', 'monospace'],
      logo: ['Bodoni Moda', 'Source Han Serif SC', 'serif'],
    },
  },
} satisfies Config
