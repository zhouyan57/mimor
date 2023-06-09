import { Entry } from './Entry'
import { State } from './State'
import { entryIsModifiedByUpload } from './entryIsModifiedByUpload'

export function stateEntriesSorted(state: State): Array<Entry> {
  sortEntries(state.entries)

  return state.entries
}

function sortEntries(entries: Array<Entry>): Array<Entry> {
  return entries.sort((x, y) => {
    if (entryIsModifiedByUpload(y) && !entryIsModifiedByUpload(x)) {
      return 1
    }

    if (!entryIsModifiedByUpload(y) && entryIsModifiedByUpload(x)) {
      return -1
    }

    return y.updatedAt - x.updatedAt
  })
}
