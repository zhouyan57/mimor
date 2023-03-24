import { reactive } from 'vue'
import { State } from './State'
import { stateReactivelyMaybeApplyEffect } from './stateReactivelyMaybeApplyEffect'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  stateReactivelyMaybeApplyEffect(state)

  return state
}
