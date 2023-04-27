import { MimorEntry } from './MimorEntry'
import { State } from './State'

export function stateFindMimorEntries(state: State): Array<MimorEntry> {
  return state.mimorEntries
}
