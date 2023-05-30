import * as fsa from '../../utils/fsa'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { Connection } from './Connection'
import { State } from './State'

export async function stateConnectionUpload(
  state: State,
  connection: Connection,
): Promise<void> {
  connection.isUploading = true

  const list = (await fsa.list(connection.handle)).filter(
    (file) => file.endsWith('.md') || file.endsWith('.mimor'),
  )

  const texts = await promiseAllFulfilled(
    list.map(async (path) => {
      const file = await fsa.read(connection.handle, path)
      const text = await file.text()
      return [path, text]
    }),
  )

  for (const [path, text] of texts) {
    const found = state.entries.find((entry) => entry.path === path)
    if (found) {
      found.text = text
    } else {
      state.entries.push({
        isPublic: true,
        path,
        text,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      })
    }
  }

  connection.isUploading = false
}
