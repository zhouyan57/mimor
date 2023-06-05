import { parse } from '@xieyuheng/x-node'
import { State } from './State'
import { Theme } from './Theme'
import { createProgram } from './createProgram'

export function createState(options: {
  src: string
  withMetaThemeColor?: boolean
  isEditable?: boolean
  text: string
}): State {
  const { src, withMetaThemeColor, isEditable, text } = options

  const theme = new Theme('white')
  const metadata = { keywords: [], themeColor: 'white' }
  const state = {
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
