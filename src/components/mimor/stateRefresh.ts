import * as Kv from 'idb-keyval'
import { loadContent } from '../../models/content/loadContent'
import { State } from './State'
import { createState } from './createState'
import { stateReactive } from './stateReactive'

export async function stateRefresh(state: State): Promise<void> {
  const store = Kv.createStore('mimor.app/<mimor>', 'cache')
  const text = await loadContent(state.src)
  // We need `stateReactive` to make nested objects reactive.
  const newState = stateReactive(createState({ ...state, text }))
  Object.assign(state, newState)
  const cached = { text }
  await Kv.set(state.src, cached, store)
}
