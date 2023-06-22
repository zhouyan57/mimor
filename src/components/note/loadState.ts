import * as Kv from 'idb-keyval'
import { loadContent } from '../../models/content/loadContent'
import { State } from './State'
import { createState } from './createState'

export interface StateOptions {
  src: string
  text?: string
  isEditable?: boolean
}

export async function loadState(options: StateOptions): Promise<State> {
  if (options.text !== undefined) {
    return createState({
      ...options,
      text: options.text,
      isTextGiven: true,
    })
  }

  const store = Kv.createStore('mimor.app/<note>', 'cache')
  const cache = await Kv.get(options.src, store)
  if (cache) {
    const state = createState({ ...options, ...cache })
    state.isLoadedFromCache = true
    return state
  } else {
    const text = await loadContent(options.src)
    const cache = { text }
    await Kv.set(options.src, cache, store)
    const state = createState({ ...options, text })
    return state
  }
}
