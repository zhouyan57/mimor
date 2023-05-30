import * as fsa from '../../utils/fsa'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { Connection } from './Connection'
import { Entry } from './Entry'
import { State } from './State'
import { pathParse } from './pathParse'

export async function stateConnectionDownload(
  state: State,
  connection: Connection,
): Promise<void> {
  connection.isDownloading = true

  await promiseAllFulfilled(
    state.entries.map((entry) =>
      stateConnectionDownloadEntry(state, connection, entry),
    ),
  )

  connection.isDownloading = false
}

async function stateConnectionDownloadEntry(
  state: State,
  connection: Connection,
  entry: Entry,
): Promise<void> {
  if (entry.text) {
    const parsed = pathParse(entry.path)
    await fsa.write(connection.handle, parsed.file, entry.text)
  }
}
