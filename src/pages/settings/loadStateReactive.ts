import { reactive } from 'vue'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { State } from './State'
import { StateOptions, loadState } from './loadState'

let cache: Record<string, State> = {}

export async function loadStateReactive(options: StateOptions): Promise<State> {
  const auth = useGlobalAuth()

  if (auth.username && cache[auth.username]) {
    return cache[auth.username]
  }

  const state = reactive(await loadState(options))

  if (auth.username) {
    cache[auth.username] = state
  }

  return state
}
