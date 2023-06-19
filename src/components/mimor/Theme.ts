import tailwindColors from 'tailwindcss/colors'

// See `tailwind.config.js` for used colors.

export class Theme {
  constructor(public name: string) {}

  get colors(): Record<number, string> {
    let name = this.name
    if (name === 'blue') {
      name = 'sky'
    }

    if (name === 'yellow') {
      name = 'amber'
    }

    return (tailwindColors as any)[name]
  }

  bg(level: number): string {
    return `bg-${this.name}-${level}`
  }

  ring(level: number): string {
    return this.name === 'white' ? 'ring-black' : `ring-${this.name}-${level}`
  }

  border(level: number): string {
    return this.name === 'white'
      ? 'border-black'
      : `border-${this.name}-${level}`
  }

  text(level: number): string {
    return this.name === 'white' ? 'text-black' : `text-${this.name}-${level}`
  }
}
