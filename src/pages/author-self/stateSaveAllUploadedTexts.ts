import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { ConnectionActivityReport } from './Connection'
import { State } from './State'
import { pathParse } from './pathParse'
import { stateCacheSet } from './stateCacheSet'
import { stateEntrySaveUploadedText } from './stateEntrySaveUploadedText'

export async function stateSaveAllUploadedTexts(state: State): Promise<void> {
  state.isSavingUploadedTexts = true

  const report: ConnectionActivityReport = {
    updatedFiles: [],
    createdFiles: [],
  }

  await promiseAllFulfilled(
    state.entries.map(async (entry) => {
      const file = pathParse(entry.path).file

      if (entry.text === undefined && entry.uploadedText !== undefined) {
        report.createdFiles.push(file)
      }

      if (
        entry.text !== undefined &&
        entry.uploadedText !== undefined &&
        entry.uploadedText !== entry.text
      ) {
        report.updatedFiles.push(file)
      }

      return await stateEntrySaveUploadedText(state, entry)
    }),
  )

  if (state.connection) {
    state.connection.activities.unshift({
      name: 'Save',
      time: Date.now(),
      report,
    })
  }

  state.isSavingUploadedTexts = false

  // Should not save `isSavingUploadedTexts = true` to cache.

  await stateCacheSet(state)
}
