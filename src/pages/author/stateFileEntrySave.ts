import { State } from './State'
import { FileEntry } from './stateConnectionReadFileEntries'

export function stateFileEntrySave(state: State, fileEntry: FileEntry): void {
  const who = 'stateFileEntrySave'

  const found = state.entries.find((entry) => entry.path === fileEntry.path)
  if (found) {
    if (found.text !== fileEntry.text) {
      found.text = fileEntry.text
      found.updatedAt = fileEntry.updatedAt

      console.log({
        who,
        message: 'update existing entry by fileEntry',
        entry: found,
        fileEntry,
      })
    } else {
      console.log({
        who,
        message: 'the text of existing entry is not modified',
        entry: found,
      })
    }
  } else {
    const entry = {
      isPublic: true,
      isModified: true,
      path: fileEntry.path,
      text: fileEntry.text,
      createdAt: fileEntry.updatedAt,
      updatedAt: fileEntry.updatedAt,
    }

    state.entries.push(entry)

    console.log({
      who,
      message: 'save new entry',
      entry,
    })
  }
}
