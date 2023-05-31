import { State } from './State'
import { loadState } from './loadState'
import { stateCacheSave } from './stateCacheSave'

export async function stateRefresh(state: State): Promise<void> {
  state.isRefreshing = true

  const newState = await loadState(state)
  Object.assign(state, newState)

  await stateCacheSave({
    ...newState,
    latestDirectoryHandle: state.latestDirectoryHandle,
  })

  state.isRefreshing = false
}
