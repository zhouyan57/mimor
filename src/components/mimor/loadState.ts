import * as Kv from 'idb-keyval'
import { loadContent } from '../../models/content/loadContent'
import { State } from './State'
import { createState } from './createState'

export interface StateOptions {
  src: string
  text?: string
  withMetaThemeColor?: boolean
  isEditable?: boolean
}

export async function loadState(options: StateOptions): Promise<State> {
  if (options.text !== undefined) {
    return createState({ ...options, text: options.text })
  }

  const store = Kv.createStore('mimor.app/<mimor>', 'cache')
  const cached = await Kv.get(options.src, store)
  if (cached) {
    const state = createState({ ...options, ...cached })
    state.isLoadedFromCache = true
    return state
  } else {
    const text = await loadContent(options.src)
    const cached = { text }
    await Kv.set(options.src, cached, store)
    const state = createState({ ...options, text })
    return state
  }
}
