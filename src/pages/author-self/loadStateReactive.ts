import { State } from './State'
import { StateOptions } from './loadState'
import { loadStateCached } from './loadStateCached'
import { stateReactive } from './stateReactive'

let cache:
  | {
      state: State
      username: string
    }
  | undefined = undefined

export async function loadStateReactive(options: StateOptions): Promise<State> {
  const { username } = options

  if (cache && cache.username === username) {
    return cache.state
  }

  const state = stateReactive(await loadStateCached(options))

  cache = { state, username }

  return state
}
