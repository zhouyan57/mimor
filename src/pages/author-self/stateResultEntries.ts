import { Entry } from './Entry'
import { State } from './State'
import { entryIsModifiedByUpload } from './entryIsModifiedByUpload'

export function stateResultEntries(state: State): Array<Entry> {
  return state.entries.sort((x, y) => {
    if (entryIsModifiedByUpload(y) && !entryIsModifiedByUpload(x)) {
      return 1
    }

    if (!entryIsModifiedByUpload(y) && entryIsModifiedByUpload(x)) {
      return -1
    }

    return y.updatedAt - x.updatedAt
  })
}
