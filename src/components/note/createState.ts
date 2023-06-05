import { State } from './State'
import { StateOptions } from './loadState'

export function createState(input: {
  options: StateOptions
  src: string
  text: string
  isEditable?: boolean
}): State {
  const { options, src, text, isEditable } = input

  return {
    options,
    src,
    text,
    originalText: text,
    isEditing: false,
    isFullscreen: false,
    isEditable,
  }
}
