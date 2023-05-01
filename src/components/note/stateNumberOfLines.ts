import { State } from './State'

export function stateNumberOfLines(state: State) {
  const lines = state.text.split('\n')
  return lines.length
}
