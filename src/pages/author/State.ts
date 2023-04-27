import { authorMimorEntriesPrivate } from './authorMimorEntriesPrivate'
import { authorMimorEntriesPublic } from './authorMimorEntriesPublic'
import { createEditor, Editor } from './Editor'
import { MimorEntry } from './MimorEntry'

export type State = {
  isSelf: boolean
  editor: Editor
  mimorEntries: Array<MimorEntry>
}

export type StateOptions = {
  isSelf: boolean
  username: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const mimorEntries = options.isSelf
    ? [
        ...(await authorMimorEntriesPrivate(options.username)),
        ...(await authorMimorEntriesPublic(options.username)),
      ]
    : await authorMimorEntriesPublic(options.username)

  return {
    isSelf: options.isSelf,
    editor: createEditor(),
    mimorEntries,
  }
}
