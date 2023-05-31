import * as fsa from '../../utils/fsa'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { Connection } from './Connection'
import { State } from './State'
import { pathFormat } from './pathFormat'

export type FileEntry = {
  path: string
  updatedAt: number
  text: string
}

export async function stateConnectionReadFileEntries(
  state: State,
  connection: Connection,
): Promise<Array<FileEntry>> {
  const filePaths = (await fsa.list(connection.handle)).filter(
    (file) => file.endsWith('.md') || file.endsWith('.mimor'),
  )

  return await promiseAllFulfilled(
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
}
