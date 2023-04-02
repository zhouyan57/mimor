import { parse } from '@readonlylink/x-node'
import { State } from './State'
import { Theme } from './Theme'
import { createProgram } from './createProgram'

export interface StateOptions {
  url: string
  text?: string
  fullscreen?: boolean
}

export async function loadState(options: StateOptions): Promise<State> {
  const { url, fullscreen } = options

  const text = options.text || (await loadText(url))
  const theme = new Theme('white')
  const metadata = { keywords: [], themeColor: 'white' }
  const state = { url, text, theme, metadata, fullscreen }

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

async function loadText(url: string): Promise<string> {
  const response = await fetch(url)
  const text = await response.text()
  return text
}
