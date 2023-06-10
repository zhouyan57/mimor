import { State } from './State'
import { loadState } from './loadState'
import { stateCacheSet } from './stateCacheSet'

export async function stateRefresh(state: State): Promise<void> {
  state.isRefreshing = true

  const newState = await loadState(state)

  state.user = newState.user
  state.entries = newState.entries

  await stateCacheSet(state)

  state.isRefreshing = false
}
