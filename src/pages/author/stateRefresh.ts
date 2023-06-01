import { State } from './State'
import { loadState } from './loadState'
import { stateCacheSave } from './stateCacheSave'

export async function stateRefresh(state: State): Promise<void> {
  state.isRefreshing = true

  const newState = await loadState(state)

  state.user = newState.user
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

  await stateCacheSave(state)

  state.isRefreshing = false
}
