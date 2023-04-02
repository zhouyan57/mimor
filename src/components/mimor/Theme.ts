import tailwindColors from 'tailwindcss/colors'

// See `tailwind.config.js` for used colors.

export class Theme {
  constructor(public name: string) {}

  get colors(): Record<number, string> {
    let name = this.name

    if (name === 'blue') {
      name = 'sky'
    }

    return (tailwindColors as any)[name]
  }

  isWhite(): boolean {
    return this.name === 'white'
  }

  isNotWhite(): boolean {
    return !this.isWhite()
  }

  bg(level: number): string {
    return `bg-${this.name}-${level}`
  }

  border(level: number): string {
    return `border-${this.name}-${level}`
  }

  text(level: number): string {
    return `text-${this.name}-${level}`
  }
}
