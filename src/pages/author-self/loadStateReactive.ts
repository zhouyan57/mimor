import { State } from './State'
import { loadCachedState } from './loadCachedState'
import { StateOptions } from './loadState'
import { stateReactive } from './stateReactive'

let state: State | undefined = undefined

export async function loadStateReactive(options: StateOptions): Promise<State> {
  if (state) {
    return state
  }

  state = await loadCachedState(options)
  state = stateReactive(state)
  return state
}
