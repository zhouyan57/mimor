import { State } from './State'
import { StateOptions } from './loadState'
import { loadStateCached } from './loadStateCached'
import { stateReactive } from './stateReactive'

const cache: Record<string, State> = {}

export async function loadStateReactive(options: StateOptions): Promise<State> {
  const { username } = options

  if (cache[username]) {
    return cache[username]
  }

  const state = stateReactive(await loadStateCached(options))

  cache[username] = state

  return state
}
