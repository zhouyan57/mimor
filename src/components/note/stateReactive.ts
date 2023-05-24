import { reactive } from 'vue'
import { asyncRun } from '../../utils/asyncRun'
import { State } from './State'
import { stateReactivelyUpdateIsFullscreen } from './stateReactivelyUpdateIsFullscreen'
import { stateRefresh } from './stateRefresh'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  stateReactivelyUpdateIsFullscreen(state)

  if (state.isLoadedFromCache) {
    asyncRun(async () => {
      await stateRefresh(state)
      state.isLoadedFromCache = false
    })
  }

  return state
}
