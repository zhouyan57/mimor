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
    stateFileEntrySave(state, fileEntry)
  }

  connection.isUploading = false
}

function stateFileEntrySave(state: State, fileEntry: FileEntry): void {
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
