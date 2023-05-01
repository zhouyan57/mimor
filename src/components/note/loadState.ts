import { loadContent } from '../../models/content/loadContent'
import { State } from './State'

export interface StateOptions {
  src: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { src } = options

  const text = await loadContent(src)

  const state = {
    src,
    text,
    isFullscreen: false,
  }

  return state
}
