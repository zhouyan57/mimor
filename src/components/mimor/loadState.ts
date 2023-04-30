import { parse } from '@xieyuheng/x-node'
import { State } from './State'
import { Theme } from './Theme'
import { createProgram } from './createProgram'
import { loadText } from './loadText'

export interface StateOptions {
  src: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { src } = options

  const text = await loadText(src)
  const theme = new Theme('white')
  const metadata = { keywords: [], themeColor: 'white' }
  const state = {
    src,
    text,
    theme,
    metadata,
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
