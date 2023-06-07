import { pathFormat } from '../author/pathFormat'
import { pathParse } from '../author/pathParse'
import { Connection, ConnectionFileEntry } from './Connection'
import { State } from './State'
import { readConnectionFileEntries } from './readConnectionFileEntries'

export async function stateConnectionUpload(
  state: State,
  connection: Connection,
): Promise<void> {
  connection.isUploading = true

  connection.fileEntries = await readConnectionFileEntries(connection.handle)

  const report = { updatedFiles: [], createdFiles: [] }

  for (const fileEntry of connection.fileEntries) {
    saveConnectionFileEntry(state, fileEntry, report)
  }

  connection.activities.unshift({
    name: 'Upload',
    time: Date.now(),
    report,
  })

  connection.isUploading = false
}

function saveConnectionFileEntry(
  state: State,
  fileEntry: ConnectionFileEntry,
  report: { updatedFiles: Array<string>; createdFiles: Array<string> },
): void {
  const found = state.entries.find(
    (entry) => pathParse(entry.path).file === fileEntry.path,
  )

  if (found) {
    if (found.text !== fileEntry.text) {
      found.updatedAt = fileEntry.updatedAt
      report.updatedFiles.push(fileEntry.path)
    }

    found.uploadedText = fileEntry.text
  } else {
    report.createdFiles.push(fileEntry.path)
    state.entries.push({
      isPublic: true,
      path: pathFormat({
        isPublic: true,
        username: state.username,
        file: fileEntry.path,
      }),
      uploadedText: fileEntry.text,
      createdAt: fileEntry.updatedAt,
      updatedAt: fileEntry.updatedAt,
    })
  }
}
