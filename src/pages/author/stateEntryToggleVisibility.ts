import { Entry } from './Entry'
import { State } from './State'
import { stateMakeEntryPrivate } from './stateMakeEntryPrivate'
import { stateMakeEntryPublic } from './stateMakeEntryPublic'

export async function stateEntryToggleVisibility(
  state: State,
  entry: Entry,
): Promise<void> {
  if (entry.isPublic) {
    await stateMakeEntryPrivate(state, entry)
  } else {
    await stateMakeEntryPublic(state, entry)
  }
}
