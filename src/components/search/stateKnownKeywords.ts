import { State } from './State'

export function stateKnownKeywords(state: State): Array<string> {
  return Object.values(state.targets).flatMap((target) => target.keywords)
}
