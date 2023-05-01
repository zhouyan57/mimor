import { reactive } from 'vue'
import { State } from './State'
import { stateReactivelyUpdateIsFullscreen } from './stateReactivelyUpdateIsFullscreen'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  stateReactivelyUpdateIsFullscreen(state)

  return state
}
