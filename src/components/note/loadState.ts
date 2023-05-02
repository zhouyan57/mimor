import { loadContent } from '../../models/content/loadContent'
import { State } from './State'

export interface StateOptions {
  src: string
  isEditable?: boolean
}

export async function loadState(options: StateOptions): Promise<State> {
  const { src, isEditable } = options

  const text = await loadContent(src)

  return {
    src,
    text,
    isEditing: false,
    isFullscreen: false,
    isEditable,
  }
}
