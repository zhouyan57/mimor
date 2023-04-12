import { reactive } from 'vue'
import { State } from './State'
import { stateReactivelyUpdateIsFullscreen } from './stateReactivelyUpdateIsFullscreen'
import { stateReactivelyUpdateThemeColor } from './stateReactivelyUpdateThemeColor'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  stateReactivelyUpdateThemeColor(state)
  stateReactivelyUpdateIsFullscreen(state)

  return state
}
