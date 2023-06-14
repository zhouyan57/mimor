import { reactive } from 'vue'
import { State } from './State'
import { entryReactive } from './entryReactive'
import { statePeriodicallyConnectionUpload } from './statePeriodicallyConnectionUpload'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  statePeriodicallyConnectionUpload(state)
  state.entries = state.entries.map((entry) => entryReactive(entry, state))

  return state
}
