import * as Kv from 'idb-keyval'
import { State } from './State'

export async function stateCacheGet(
  username: string,
): Promise<State | undefined> {
  const store = Kv.createStore('mimor.app/author-other', 'cache')
  const cache = await Kv.get(username, store)

  delete cache.isSearching
  delete cache.isRefreshing

  return cache
}
