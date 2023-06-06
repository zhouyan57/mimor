import * as fsa from '../../utils/fsa'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { ConnectionFileEntry } from './Connection'

export async function readConnectionFileEntries(
  username: string,
  handle: FileSystemDirectoryHandle,
): Promise<Array<ConnectionFileEntry>> {
  const paths = (await fsa.list(handle)).filter(
    (file) => file.endsWith('.md') || file.endsWith('.mimor'),
  )

  return await promiseAllFulfilled(
    paths.map(async (path) => {
      const file = await fsa.read(handle, path)
      const text = await file.text()
      return {
        path,
        updatedAt: file.lastModified,
        text,
      }
    }),
  )
}
