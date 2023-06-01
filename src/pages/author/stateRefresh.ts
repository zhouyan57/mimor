import { State } from './State'
import { loadState } from './loadState'
import { stateCacheSet } from './stateCacheSet'

export async function stateRefresh(state: State): Promise<void> {
  state.isRefreshing = true

  const newState = await loadState(state)

  state.user = newState.user
  state.isSelf = newState.isSelf

  for (const newEntry of newState.entries) {
    const found = state.entries.find((entry) => entry.path === newEntry.path)
    if (found) {
      if (found.text !== newEntry.text) {
        found.text = newEntry.text
        found.updatedAt = newEntry.updatedAt
      }
    } else {
      state.entries.push(newEntry)
    }
  }

  await stateCacheSet(state)

  state.isRefreshing = false
}
