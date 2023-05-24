import * as Kv from 'idb-keyval'
import { loadContent } from '../../models/content/loadContent'
import { State } from './State'
import { createState } from './createState'

export interface StateOptions {
  src: string
  isEditable?: boolean
}

export async function loadState(options: StateOptions): Promise<State> {
  const { src } = options

  const store = Kv.createStore('mimor.app/<note>', 'cache')
  const cached = await Kv.get(src, store)
  if (cached) {
    const state = createState({ ...options, ...cached })
    state.isLoadedFromCache = true
    return state
  } else {
    const text = await loadContent(src)
    const cached = { text }
    await Kv.set(src, cached, store)
    const state = createState({ ...options, text })
    return state
  }
}
