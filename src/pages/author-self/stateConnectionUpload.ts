import { Connection, ConnectionFileEntry } from './Connection'
import { State } from './State'
import { stateReadConnectionFileEntries } from './stateReadConnectionFileEntries'

export async function stateConnectionUpload(
  state: State,
  connection: Connection,
): Promise<void> {
  connection.isUploading = true

  const fileEntries = await stateReadConnectionFileEntries(
    state,
    connection.handle,
  )

  for (const fileEntry of fileEntries) {
    stateConnectionFileEntrySave(state, fileEntry)
  }

  connection.isUploading = false
}

function stateConnectionFileEntrySave(
  state: State,
  fileEntry: ConnectionFileEntry,
): void {
  const found = state.entries.find((entry) => entry.path === fileEntry.path)
  if (found) {
    found.uploadedText = fileEntry.text

    if (found.text !== fileEntry.text) {
      found.updatedAt = fileEntry.updatedAt
    }
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
