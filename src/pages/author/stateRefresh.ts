import * as Kv from 'idb-keyval'
import { State } from './State'
import { loadState } from './loadState'

export async function stateRefresh(state: State): Promise<void> {
  state.isRefreshing = true
  const store = Kv.createStore('mimor.app/authors', 'cache')
  const newState = await loadState(state)
  Object.assign(state, newState)

  const cacheState: State = {
    ...newState,
    latestDirectoryHandle: state.latestDirectoryHandle,
  }

  await Kv.set(state.username, cacheState, store)
  state.isRefreshing = false
}
