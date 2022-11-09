import tailwindColors from 'tailwindcss/colors'

export class Theme {
  _name: string

  constructor(name: string) {
    this._name = name
  }

  get name(): string {
    return translateColorName(this._name)
  }

  set name(name: string) {
    this._name = name
  }

  get color(): string {
    let name = this.name
    if (name === 'blue') name = 'sky'
    return (tailwindColors as any)[name][300] || '#ffffff'
  }

  get isWhite(): boolean {
    return this.name === 'white'
  }

  get notWhite(): boolean {
    return !this.isWhite
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

function translateColorName(name: string): string {
  return chineseColorNames[name] || name
}

export const colors = [
  'white',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'stone',
]

const chineseColorNames: Record<string, string> = {
  白: 'white',
  红: 'red',
  赤: 'red',
  橙: 'orange',
  黄: 'yellow',
  绿: 'green',
  蓝: 'blue',
  青: 'blue',
  靛: 'indigo',
  紫: 'purple',
  墨: 'stone',
}
