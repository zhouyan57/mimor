import { State } from './State'
import { StateOptions } from './loadState'
import { loadStateFromCacheFirst } from './loadStateFromCacheFirst'
import { stateReactive } from './stateReactive'

let state: State | undefined = undefined

export async function loadReactiveState(options: StateOptions): Promise<State> {
  if (state) {
    return state
  }

  state = await loadStateFromCacheFirst(options)
  state = stateReactive(state)
  return state
}
