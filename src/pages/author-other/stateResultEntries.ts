import { Entry } from './Entry'
import { State } from './State'

export function stateResultEntries(state: State): Array<Entry> {
  return state.entries.sort((x, y) => {
    return y.updatedAt - x.updatedAt
  })
}
