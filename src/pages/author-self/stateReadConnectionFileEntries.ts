import * as fsa from '../../utils/fsa'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { ConnectionFileEntry } from './Connection'
import { State } from './State'
import { pathFormat } from './pathFormat'

export async function stateReadConnectionFileEntries(
  state: State,
  handle: FileSystemDirectoryHandle,
): Promise<Array<ConnectionFileEntry>> {
  const filePaths = (await fsa.list(handle)).filter(
    (file) => file.endsWith('.md') || file.endsWith('.mimor'),
  )

  return await promiseAllFulfilled(
    filePaths.map(async (filePath) => {
      const file = await fsa.read(handle, filePath)
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
}
