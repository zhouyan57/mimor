import * as Kv from 'idb-keyval'
import { State } from './State'

export async function stateCacheGet(
  username: string,
): Promise<State | undefined> {
  const store = Kv.createStore('mimor.app/authors', 'cache')
  const cached = await Kv.get(username, store)
  return cached
}
