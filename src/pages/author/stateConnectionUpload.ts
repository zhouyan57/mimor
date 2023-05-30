import * as fsa from '../../utils/fsa'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { Connection } from './Connection'
import { State } from './State'
import { pathFormat } from './pathFormat'

export async function stateConnectionUpload(
  state: State,
  connection: Connection,
): Promise<void> {
  connection.isUploading = true

  const filePaths = (await fsa.list(connection.handle)).filter(
    (file) => file.endsWith('.md') || file.endsWith('.mimor'),
  )

  const fileEntries = await promiseAllFulfilled(
    filePaths.map(async (filePath) => {
      const file = await fsa.read(connection.handle, filePath)
      const text = await file.text()
      return {
        path: pathFormat({
          isPublic: true,
          username: state.username,
          file: filePath,
        }),
        updatedAt: file.lastModified,
        text,
      }
    }),
  )

  for (const fileEntry of fileEntries) {
    const found = state.entries.find((entry) => entry.path === fileEntry.path)
    if (found) {
      found.text = fileEntry.text
      found.updatedAt = fileEntry.updatedAt
    } else {
      state.entries.push({
        isPublic: true,
        path: fileEntry.path,
        text: fileEntry.text,
        createdAt: fileEntry.updatedAt,
        updatedAt: fileEntry.updatedAt,
      })
    }
  }

  connection.isUploading = false
}
