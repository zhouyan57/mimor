import { parse } from '@xieyuheng/x-node'
import { loadContent } from '../../models/content/loadContent'
import { State } from './State'
import { Theme } from './Theme'
import { createProgram } from './createProgram'

export interface StateOptions {
  src: string
  withMetaThemeColor?: boolean
}

export async function loadState(options: StateOptions): Promise<State> {
  const { src, withMetaThemeColor } = options

  const text = await loadContent(src)
  const theme = new Theme('white')
  const metadata = { keywords: [], themeColor: 'white' }
  const state = {
    src,
    text,
    theme,
    metadata,
    withMetaThemeColor,
    isFullscreen: false,
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
