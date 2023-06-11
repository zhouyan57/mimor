import { reactive } from 'vue'
import { asyncRun } from '../../utils/asyncRun'
import { State } from './State'
import { entryReactive } from './entryReactive'
import { stateRefresh } from './stateRefresh'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  state.entries = state.entries.map((entry) => entryReactive(entry, state))

  if (state.isLoadedFromCache) {
    asyncRun(async () => {
      await stateRefresh(state)
    })
  }

  return state
}
