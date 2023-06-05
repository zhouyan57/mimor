import * as Kv from 'idb-keyval'
import { reactiveToRaw } from '../../utils/vue/reactiveToRaw'
import { State } from './State'

export async function stateCacheSet(state: State): Promise<void> {
  const store = Kv.createStore('mimor.app/authors', 'cache')

  // Delete text to let the content components load and cache `text`.
  const entries = state.entries.map((entry) => {
    const newEntry = { ...entry }
    delete newEntry.text
    return newEntry
  })

  await Kv.set(
    state.username,
    reactiveToRaw({ ...state, entries, connection: undefined }),
    store,
  )
}
