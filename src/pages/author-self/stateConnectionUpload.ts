import { Connection, ConnectionFileEntry } from './Connection'
import { State } from './State'
import { pathFormat } from './pathFormat'
import { pathParse } from './pathParse'
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
    saveConnectionFileEntry(state, fileEntry)
  }

  connection.isUploading = false
}

function saveConnectionFileEntry(
  state: State,
  fileEntry: ConnectionFileEntry,
): void {
  const found = state.entries.find(
    (entry) => pathParse(entry.path).file === fileEntry.path,
  )

  if (found) {
    if (found.text !== fileEntry.text) {
      found.updatedAt = fileEntry.updatedAt
    }

    found.uploadedText = fileEntry.text
  } else {
    state.entries.push({
      isPublic: true,
      path: pathFormat({
        isPublic: true,
        username: state.username,
        file: fileEntry.path,
      }),
      text: fileEntry.text,
      uploadedText: fileEntry.text,
      createdAt: fileEntry.updatedAt,
      updatedAt: fileEntry.updatedAt,
    })
  }
}
