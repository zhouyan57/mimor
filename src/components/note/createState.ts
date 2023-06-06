import { State } from './State'

export function createState(options: {
  src: string
  text: string
  isEditable?: boolean
  isTextGiven?: boolean
}): State {
  const { src, text, isEditable, isTextGiven } = options

  return {
    src,
    text,
    originalText: text,
    isTextGiven,
    isEditing: false,
    isFullscreen: false,
    isEditable,
  }
}
