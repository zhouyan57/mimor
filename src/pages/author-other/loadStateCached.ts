import { createState as createSearchState } from '../../components/search/createState'
import { State } from './State'
import { StateOptions, loadState } from './loadState'
import { stateCacheGet } from './stateCacheGet'
import { stateCacheSet } from './stateCacheSet'

export async function loadStateCached(options: StateOptions): Promise<State> {
  const { username } = options

  const cached = await stateCacheGet(username)

  if (cached) {
    return {
      ...cached,
      searchState: createSearchState({ targets: {} }),
      isLoadedFromCache: true,
    }
  } else {
    const state = await loadState(options)
    await stateCacheSet(state)
    return state
  }
}
