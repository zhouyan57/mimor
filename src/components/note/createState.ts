import { State } from './State'

export function createState(options: {
  src: string
  text: string
  isEditable?: boolean
}): State {
  const { src, text, isEditable } = options

  return {
    src,
    text,
    originalText: text,
    isEditing: false,
    isFullscreen: false,
    isEditable,
  }
}
