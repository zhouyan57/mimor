import { Entry } from './Entry'
import { State } from './State'
import { entryIsModifiedByUpload } from './entryIsModifiedByUpload'

export function stateResultEntries(state: State): Array<Entry> {
  let entries = state.entries

  entries = stateFilterEntries(state, entries)
  entries = sortEntries(entries)

  return entries
}

function stateFilterEntries(state: State, entries: Array<Entry>): Array<Entry> {
  return entries.filter((entry) => {
    if (!state.isSearching) {
      return true
    }

    return state.searchState.results[entry.path]
  })
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
