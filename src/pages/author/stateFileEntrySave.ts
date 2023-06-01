import { State } from './State'
import { FileEntry } from './stateConnectionReadFileEntries'

export function stateFileEntrySave(state: State, fileEntry: FileEntry): void {
  const who = 'stateFileEntrySave'

  const found = state.entries.find((entry) => entry.path === fileEntry.path)
  if (found) {
    if (found.text !== fileEntry.text) {
      console.log({
        who,
        message: 'update existing entry by fileEntry',
        entry: found,
        fileEntry,
        differentTexts: [found.text, fileEntry.text],
        state,
      })

      found.text = fileEntry.text
      found.updatedAt = fileEntry.updatedAt
      found.isModified = true
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
