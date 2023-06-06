import { Entry } from './Entry'
import { State } from './State'

export function stateFindEntries(state: State): Array<Entry> {
  return state.entries.sort((x, y) => {
    if (y.isModified && !x.isModified) {
      return 1
    }

    if (!y.isModified && x.isModified) {
      return -1
    }

    return y.updatedAt - x.updatedAt
  })
}
