const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern:
        /(text|border|bg)-(red|orange|yellow|green|blue|indigo|purple)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ["hover", "focus"],
    },
  ],
  theme: {
    extend: {
      colors: {
        blue: colors.sky,
      },
      rotate: {
        15: "15deg",
        20: "20deg",
        30: "30deg",
      },
    },
    fontFamily: {
      sans: [
        // "Helvetica",
        "Linux Biolinum O",
        "LXGW New Clear Gothic",
        "LXGW Clear Gothic",
        "sans-serif",
      ],
      serif: [
        // "Helvetica",
        // "EB Garamond",
        "Linux Libertine O",
        // "Source Han Serif SC",
        "LXGW WenKai",
        "serif",
      ],
      mono: [
        "Fira Code",
        // NOTE One Chinese character should equal to two English characters.
        "LXGW WenKai Larger",
        "monospace",
      ],
      logo: [
        "Bodoni Moda",
        // "EB Garamond",
        // "Linux Libertine O",
        "Source Han Serif SC",
        "serif",
      ],
    },
  },
}
