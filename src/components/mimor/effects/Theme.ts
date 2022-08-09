import { EffectOptions } from "../models/Router"

export function Theme({ mimor, element }: EffectOptions) {
  const name = element.attributes["color"] || element.attributes["颜色"]
  if (!name) return
  mimor.theme.name = name
}
