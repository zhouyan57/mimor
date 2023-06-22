import * as Kv from 'idb-keyval'
import { State } from './State'

export async function stateCacheGet(
  username: string,
): Promise<State | undefined> {
  const store = Kv.createStore('mimor.app/author-self', 'cache')
  const cache = await Kv.get(username, store)

  if (!cache) return undefined

  delete cache.connection
  delete cache.isSearching
  delete cache.isRefreshing
  delete cache.isSavingNewTexts
  delete cache.eagerLoadAll
  delete cache.focusedPath

  const contents = Kv.createStore('mimor.app/contents', 'cache')
  for (const entry of cache.entries) {
    const src = `~/${entry.path}`
    const cache = await Kv.get(src, contents)
    if (cache && typeof cache.text === 'string') {
      entry.text = cache.text
    }
  }

  await Kv.set(username, cache, store)

  return cache
}
