import { Entry } from './Entry'
import { State } from './State'
import { stateMakeEntryPrivate } from './stateMakeEntryPrivate'
import { stateMakeEntryPublic } from './stateMakeEntryPublic'

export async function stateToggleEntryVisibility(
  state: State,
  entry: Entry,
): Promise<void> {
  if (entry.isPublic) {
    await stateMakeEntryPrivate(state, entry)
  } else {
    await stateMakeEntryPublic(state, entry)
  }
}
