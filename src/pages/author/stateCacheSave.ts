import * as Kv from 'idb-keyval'
import { reactiveToRaw } from '../../utils/vue/reactiveToRaw'
import { State } from './State'

export async function stateCacheSave(state: State): Promise<void> {
  const cacheState = reactiveToRaw(state)

  delete cacheState.connection

  const store = Kv.createStore('mimor.app/authors', 'cache')
  await Kv.set(state.username, cacheState, store)
}
