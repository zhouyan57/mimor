import { reactive } from 'vue'
import { State } from './State'
import { stateReactivelyUpdateThemeColor } from './stateReactivelyUpdateThemeColor'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  stateReactivelyUpdateThemeColor(state)

  return state
}
