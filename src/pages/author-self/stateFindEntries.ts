import { Entry } from './Entry'
import { State } from './State'
import { entryIsModified } from './entryIsModified'

export function stateFindEntries(state: State): Array<Entry> {
  return state.entries.sort((x, y) => {
    if (entryIsModified(y) && !entryIsModified(x)) {
      return 1
    }

    if (!entryIsModified(y) && entryIsModified(x)) {
      return -1
    }

    return y.updatedAt - x.updatedAt
  })
}
