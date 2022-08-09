import colors from "tailwindcss/colors"

export type Color =
  | "white"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"

export class Theme {
  constructor(public name: Color) {}

  get color(): string {
    return colors[this.name][400]
  }

  get isWhite(): boolean {
    return this.name === "white"
  }

  get notWhite(): boolean {
    return !this.isWhite
  }
}
