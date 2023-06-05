import { parse } from '@xieyuheng/x-node'
import { State } from './State'
import { Theme } from './Theme'
import { createProgram } from './createProgram'
import { StateOptions } from './loadState'

export function createState(input: {
  options: StateOptions
  src: string
  withMetaThemeColor?: boolean
  isEditable?: boolean
  text: string
}): State {
  const { options, src, withMetaThemeColor, isEditable, text } = input

  const theme = new Theme('white')
  const metadata = { keywords: [], themeColor: 'white' }
  const state = {
    options,
    src,
    text,
    originalText: text,
    theme,
    metadata,
    withMetaThemeColor,
    isFullscreen: false,
    isEditable,
  }

  try {
    const nodes = parse(text)
    const program = createProgram({ nodes })

    return { kind: 'Program', ...state, program }
  } catch (error) {
    if (error instanceof Error) {
      return { kind: 'Error', ...state, error }
    } else {
      throw error
    }
  }
}
