import { Entry } from './Entry'
import { State } from './State'
import { entryCompare } from './entryCompare'

export function stateEntriesFiltered(state: State): Array<Entry> {
  const entries = stateFilterEntries(state, state.entries)
  return entries.sort(entryCompare)
}

function stateFilterEntries(state: State, entries: Array<Entry>): Array<Entry> {
  return entries.filter((entry) => state.searchState.results[entry.path])
}
