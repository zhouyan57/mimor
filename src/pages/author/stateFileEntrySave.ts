import { State } from './State'
import { FileEntry } from './stateConnectionReadFileEntries'

export function stateFileEntrySave(state: State, fileEntry: FileEntry): void {
  const found = state.entries.find((entry) => entry.path === fileEntry.path)
  if (found) {
    found.uploadedText = fileEntry.text
    found.updatedAt = fileEntry.updatedAt
  } else {
    state.entries.push({
      isPublic: true,
      path: fileEntry.path,
      text: fileEntry.text,
      uploadedText: fileEntry.text,
      createdAt: fileEntry.updatedAt,
      updatedAt: fileEntry.updatedAt,
    })
  }
}
