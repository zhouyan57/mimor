import * as Kv from 'idb-keyval'
import { reactive } from 'vue'
import { State } from './State'
import { StateOptions, loadState } from './loadState'
import { stateCacheSave } from './stateCacheSave'

export async function loadStateFromCacheFirst(
  options: StateOptions,
): Promise<State> {
  const { username } = options

  const store = Kv.createStore('mimor.app/authors', 'cache')
  const cached = await Kv.get(username, store)
  if (cached) {
    return {
      ...cached,
      entries: cached.entries.map(reactive),
      isLoadedFromCache: true,
    }
  } else {
    const state = await loadState(options)
    await stateCacheSave(state)
    return state
  }
}
