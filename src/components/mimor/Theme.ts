import tailwindColors from 'tailwindcss/colors'
import { translateColorName } from './translateColorName'

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
