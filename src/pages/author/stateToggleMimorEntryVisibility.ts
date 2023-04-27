import { MimorEntry } from './MimorEntry'
import { State } from './State'
import { stateMakeMimorEntryPrivate } from './stateMakeMimorEntryPrivate'
import { stateMakeMimorEntryPublic } from './stateMakeMimorEntryPublic'

export async function stateToggleMimorEntryVisibility(
  state: State,
  mimorEntry: MimorEntry,
): Promise<void> {
  if (mimorEntry.isPublic) {
    await stateMakeMimorEntryPrivate(state, mimorEntry)
  } else {
    await stateMakeMimorEntryPublic(state, mimorEntry)
  }
}
