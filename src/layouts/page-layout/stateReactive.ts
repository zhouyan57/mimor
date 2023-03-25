import { reactive } from 'vue'
import { Router } from 'vue-router'
import { State } from './State'
import { stateReactivelyUpdateRoute } from './stateReactivelyUpdateRoute'

export function stateReactive(state: State, router: Router): State {
  state = reactive(state) as State

  stateReactivelyUpdateRoute(state, router)

  return state
}
