import * as Kv from 'idb-keyval'
import { State } from './State'

export async function stateCacheGet(
  username: string,
): Promise<State | undefined> {
  const store = Kv.createStore('mimor.app/author-self', 'cache')
  const cache = await Kv.get(username, store)

  delete cache.connection
  delete cache.isSearching
  delete cache.isRefreshing
  delete cache.isSavingNewTexts

  return cache
}
