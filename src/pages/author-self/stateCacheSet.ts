import * as Kv from 'idb-keyval'
import { reactiveToRaw } from '../../utils/vue/reactiveToRaw'
import { State } from './State'

export async function stateCacheSet(state: State): Promise<void> {
  const store = Kv.createStore('mimor.app/author-self', 'cache')

  const entries = state.entries.map((entry) => {
    entry = { ...entry }
    delete entry.uploadedText
    return entry
  })

  const cache = reactiveToRaw({ ...state, entries })

  delete cache.connection
  delete cache.isSearching
  delete cache.isRefreshing
  delete cache.isSavingUploadedTexts

  await Kv.set(state.username, cache, store)
}
