import { State } from './State'

export function stateResultsLength(state: State): number {
  return Object.keys(state.results).length
}
