import * as fsa from '../../utils/fsa'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { Connection } from './Connection'
import { State } from './State'
import { pathParse } from './pathParse'

export async function stateConnectionDownload(
  state: State,
  connection: Connection,
): Promise<void> {
  connection.isDownloading = true

  const report: { files: Array<string> } = { files: [] }

  await promiseAllFulfilled(
    state.entries.map(async (entry) => {
      const parsed = pathParse(entry.path)
      await fsa.write(connection.handle, parsed.file, entry.text)
      report.files.push(parsed.file)
    }),
  )

  connection.activities.unshift({
    name: 'Download',
    time: Date.now(),
    report,
  })

  connection.isDownloading = false
}
