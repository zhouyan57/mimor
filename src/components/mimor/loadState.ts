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
  const { src } = options

  const store = Kv.createStore('mimor.app/<mimor>', 'cache')
  const cached = await Kv.get(src, store)
  if (cached) {
    const state = createState({ ...options, ...cached })
    state.isLoadedFromCache = true
    if (options.text) state.text = options.text
    return state
  } else {
    const text = options.text || (await loadContent(src))
    const cached = { text }
    await Kv.set(src, cached, store)
    const state = createState({ ...options, text })
    return state
  }
}
