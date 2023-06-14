import { createState as createSearchState } from '../../components/search/createState'
import { State } from './State'
import { StateOptions, loadState } from './loadState'
import { stateCacheGet } from './stateCacheGet'
import { stateCacheSet } from './stateCacheSet'

export async function loadStateCached(options: StateOptions): Promise<State> {
  const { username } = options

  const cache = await stateCacheGet(username)

  if (cache) {
    return {
      ...cache,
      searchState: createSearchState({ targets: {} }),
    }
  } else {
    const state = await loadState(options)
    await stateCacheSet(state)
    return state
  }
}
