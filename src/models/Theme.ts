import colors from "tailwindcss/colors.js"

export class Theme {
  constructor(public name: string = "stone") {}

  get backgroundColor(): string {
    return (colors as any)[this.name][50]
  }
}
