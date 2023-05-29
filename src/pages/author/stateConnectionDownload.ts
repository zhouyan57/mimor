import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { Connection } from './Connection'
import { Entry } from './Entry'
import { State } from './State'
import { pathParse } from './pathParse'

export async function stateConnectionDownload(
  state: State,
  connection: Connection,
): Promise<void> {
  await promiseAllFulfilled(
    state.entries.map((entry) =>
      stateConnectionDownloadEntry(state, connection, entry),
    ),
  )
}

async function stateConnectionDownloadEntry(
  state: State,
  connection: Connection,
  entry: Entry,
): Promise<void> {
  if (entry.text) {
    const parsed = pathParse(entry.path)
    console.log(parsed.file)
    const fileHandle = await connection.handle.getFileHandle(parsed.file, {
      create: true,
    })

    const writable = await fileHandle.createWritable()

    await writable.write(entry.text)
    await writable.close()
  }
}
