import { reactive } from 'vue'
import { State } from './State'
import { entryReactive } from './entryReactive'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  state.entries = state.entries.map((entry) => entryReactive(entry, state))

  return state
}
