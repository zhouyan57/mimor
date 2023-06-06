import * as Kv from 'idb-keyval'
import { reactiveToRaw } from '../../utils/vue/reactiveToRaw'
import { State } from './State'

export async function stateCacheSet(state: State): Promise<void> {
  const store = Kv.createStore('mimor.app/author-other', 'cache')

  await Kv.set(
    state.username,
    reactiveToRaw({ ...state, connection: undefined }),
    store,
  )
}
