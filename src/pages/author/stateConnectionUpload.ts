import { Connection } from './Connection'
import { State } from './State'
import {
  FileEntry,
  stateConnectionReadFileEntries,
} from './stateConnectionReadFileEntries'

export async function stateConnectionUpload(
  state: State,
  connection: Connection,
): Promise<void> {
  connection.isUploading = true

  const fileEntries = await stateConnectionReadFileEntries(state, connection)

  for (const fileEntry of fileEntries) {
    stateSaveFileEntry(state, fileEntry)
  }

  connection.isUploading = false
}

function stateSaveFileEntry(state: State, fileEntry: FileEntry): void {
  const found = state.entries.find((entry) => entry.path === fileEntry.path)
  if (found) {
    found.text = fileEntry.text
    found.updatedAt = fileEntry.updatedAt
  } else {
    const entry = {
      isPublic: true,
      path: fileEntry.path,
      text: fileEntry.text,
      createdAt: fileEntry.updatedAt,
      updatedAt: fileEntry.updatedAt,
    }
    state.entries.push(entry)
  }
}
