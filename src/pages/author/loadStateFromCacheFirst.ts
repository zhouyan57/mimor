import { reactive } from 'vue'
import { State } from './State'
import { StateOptions, loadState } from './loadState'
import { stateCacheGet } from './stateCacheGet'
import { stateCacheSet } from './stateCacheSet'

export async function loadStateFromCacheFirst(
  options: StateOptions,
): Promise<State> {
  const { username } = options

  const cached = await stateCacheGet(username)

  if (cached) {
    return {
      ...cached,
      entries: cached.entries.map(reactive),
      isLoadedFromCache: true,
    }
  } else {
    const state = await loadState(options)
    await stateCacheSet(state)
    return state
  }
}
