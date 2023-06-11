import { State } from './State'
import { entryReactive } from './entryReactive'
import { loadState } from './loadState'
import { stateCacheSet } from './stateCacheSet'

export async function stateRefresh(state: State): Promise<void> {
  state.isRefreshing = true

  const newState = await loadState(state)

  state.user = newState.user
  state.entries = newState.entries.map((entry) => entryReactive(entry, state))

  await stateCacheSet(state)

  state.isRefreshing = false
}
