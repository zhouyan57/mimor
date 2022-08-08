const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern:
        /(text|border|bg|placeholder)-(stone|red|orange|amber|yellow|lime|green|teal|cyan|sky|blue|indigo|violet|purple|pink|rose)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ["hover", "focus"],
    },
  ],
  theme: {
    fontFamily: {
      sans: [
        "Linux Biolinum O",
        "LXGW New Clear Gothic",
        "LXGW Clear Gothic",
        "sans-serif",
      ],
      serif: ["Linux Libertine O", "LXGW WenKai", "serif"],
      mono: [
        "Fira Code",
        // NOTE One Chinese character should equal to two English characters.
        "LXGW WenKai Larger",
        "monospace",
      ],
      logo: ["Linux Libertine O", "Source Han Serif SC", "serif"],
    },
  },
}
