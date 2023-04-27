import { createEditor } from './Editor'
import { State } from './State'
import { loadMimorEntriesPrivate } from './loadMimorEntriesPrivate'
import { loadMimorEntriesPublic } from './loadMimorEntriesPublic'

export type StateOptions = {
  username: string
  isSelf: boolean
}

export async function loadState(options: StateOptions): Promise<State> {
  const mimorEntries = options.isSelf
    ? [
        ...(await loadMimorEntriesPrivate(options.username)),
        ...(await loadMimorEntriesPublic(options.username)),
      ]
    : await loadMimorEntriesPublic(options.username)

  return {
    username: options.username,
    isSelf: options.isSelf,
    editor: createEditor(),
    mimorEntries,
  }
}
