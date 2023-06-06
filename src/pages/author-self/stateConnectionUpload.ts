import { Connection, ConnectionFileEntry } from './Connection'
import { Entry } from './Entry'
import { State } from './State'
import { readConnectionFileEntries } from './readConnectionFileEntries'

export async function stateConnectionUpload(
  state: State,
  connection: Connection,
): Promise<void> {
  connection.isUploading = true

  const fileEntries = await readConnectionFileEntries(
    state.username,
    connection.handle,
  )

  for (const fileEntry of fileEntries) {
    saveConnectionFileEntry(state.entries, fileEntry)
  }

  connection.isUploading = false
}

function saveConnectionFileEntry(
  entries: Array<Entry>,
  fileEntry: ConnectionFileEntry,
): void {
  const found = entries.find((entry) => entry.path === fileEntry.path)
  if (found) {
    if (found.text !== fileEntry.text) {
      found.updatedAt = fileEntry.updatedAt
    }

    found.uploadedText = fileEntry.text
  } else {
    entries.push({
      isPublic: true,
      path: fileEntry.path,
      text: fileEntry.text,
      uploadedText: fileEntry.text,
      createdAt: fileEntry.updatedAt,
      updatedAt: fileEntry.updatedAt,
    })
  }
}
