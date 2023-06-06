import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { State } from './State'
import { stateEntrySave } from './stateEntrySave'

export async function stateSaveEntries(state: State): Promise<void> {
  state.isSavingEntries = true

  await promiseAllFulfilled(
    state.entries.map((entry) => stateEntrySave(state, entry)),
  )

  state.isSavingEntries = false
}
