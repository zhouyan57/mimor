import { State } from './State'
import { targetMatchText } from './targetMatchText'

export function stateSearch(state: State): void {
  state.results = {}

  if (!state.text) {
    return
  }

  for (const [key, target] of Object.entries(state.targets)) {
    const result = targetMatchText(target, state.text)
    if (result) {
      state.results[key] = result
    }
  }
}
