import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { State } from './State'
import { stateEntrySaveUploadedText } from './stateEntrySaveUploadedText'

export async function stateSaveAllUploadedTexts(state: State): Promise<void> {
  state.isSavingEntries = true

  await promiseAllFulfilled(
    state.entries.map((entry) => stateEntrySaveUploadedText(state, entry)),
  )

  state.isSavingEntries = false
}
