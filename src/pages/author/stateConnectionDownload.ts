import { writeFile } from '../../utils/fsa/writeFile'
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
    await writeFile(connection.handle, parsed.file, entry.text)
  }
}
