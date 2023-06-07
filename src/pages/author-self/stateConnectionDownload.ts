import * as fsa from '../../utils/fsa'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { Connection } from './Connection'
import { Entry } from './Entry'
import { State } from './State'
import { pathParse } from './pathParse'
import { readConnectionFileEntries } from './readConnectionFileEntries'

export async function stateConnectionDownload(
  state: State,
  connection: Connection,
): Promise<void> {
  connection.isDownloading = true

  connection.fileEntries = await readConnectionFileEntries(connection.handle)

  const report = { updatedFiles: [], createdFiles: [] }

  await promiseAllFulfilled(
    state.entries.map((entry) => writeEntry(connection, entry, report)),
  )

  connection.activities.unshift({
    name: 'Download',
    time: Date.now(),
    report,
  })

  connection.isDownloading = false
}

export async function writeEntry(
  connection: Connection,
  entry: Entry,
  report: { updatedFiles: Array<string>; createdFiles: Array<string> },
): Promise<void> {
  if (entry.text === undefined) {
    return
  }

  const parsed = pathParse(entry.path)
  const fileEntry = connection.fileEntries.find(
    (fileEntry) => fileEntry.path === parsed.file,
  )

  if (fileEntry) {
    if (fileEntry.text !== entry.text) {
      await fsa.write(connection.handle, parsed.file, entry.text)
      report.updatedFiles.push(parsed.file)
    }
  } else {
    await fsa.write(connection.handle, parsed.file, entry.text)
    report.createdFiles.push(parsed.file)
  }
}
