import { EffectOptions } from '../Effect'

export function Theme({ state, element }: EffectOptions) {
  const name = element.attributes['color'] || element.attributes['颜色']
  if (!name) {
    return
  }

  state.theme.name = name
}
