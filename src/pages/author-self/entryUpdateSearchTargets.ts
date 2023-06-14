import { Entry } from './Entry'
import { State } from './State'
import { entryKeywords } from './entryKeywords'

export function entryUpdateSearchTargets(entry: Entry, state: State): void {
  state.searchState.targets[entry.path] = {
    keywords: entryKeywords(entry),
    text: entry.newText || entry.text || '',
  }
}
