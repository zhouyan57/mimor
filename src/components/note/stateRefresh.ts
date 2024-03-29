import * as Kv from 'idb-keyval'
import { loadContent } from '../../models/content/loadContent'
import { State } from './State'
import { createState } from './createState'

export async function stateRefresh(state: State): Promise<void> {
  const store = Kv.createStore('mimor.app/contents', 'cache')
  const text = await loadContent(state.src)
  const newState = createState({ ...state, text })
  Object.assign(state, newState)
  const cache = { text }
  await Kv.set(state.src, cache, store)
}
