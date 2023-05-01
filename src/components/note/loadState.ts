import { State } from './State'
import { loadText } from './loadText'

export interface StateOptions {
  src: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { src } = options

  const text = await loadText(src)

  const state = {
    src,
    text,
    isFullscreen: false,
  }

  return state
}
