import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { pathParse } from '../author/pathParse'
import { ConnectionActivityReport } from './Connection'
import { State } from './State'
import { stateCacheSet } from './stateCacheSet'
import { stateEntrySaveNewText } from './stateEntrySaveNewText'

export async function stateSaveAllNewTexts(state: State): Promise<void> {
  state.isSavingNewTexts = true

  const report: ConnectionActivityReport = {
    updatedFiles: [],
    createdFiles: [],
  }

  await promiseAllFulfilled(
    state.entries.map(async (entry) => {
      const file = pathParse(entry.path).file

      if (entry.text === undefined && entry.newText !== undefined) {
        report.createdFiles.push(file)
      }

      if (
        entry.text !== undefined &&
        entry.newText !== undefined &&
        entry.newText !== entry.text
      ) {
        report.updatedFiles.push(file)
      }

      return await stateEntrySaveNewText(state, entry)
    }),
  )

  if (state.connection) {
    state.connection.activities.unshift({
      name: 'Save',
      time: Date.now(),
      report,
    })
  }

  state.isSavingNewTexts = false

  // Should not save `isSavingNewTexts = true` to cache.

  await stateCacheSet(state)
}
