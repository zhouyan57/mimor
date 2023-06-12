import { State } from './State'
import { StateOptions } from './loadState'
import { loadStateCached } from './loadStateCached'
import { stateReactive } from './stateReactive'

let state: State | undefined = undefined

export async function loadStateReactive(options: StateOptions): Promise<State> {
  if (state) {
    return state
  }

  state = await loadStateCached(options)
  state = stateReactive(state)
  return state
}
