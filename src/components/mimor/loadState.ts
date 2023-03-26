import { parseNodes } from '@xieyuheng/x-node'
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

  try {
    const nodes = parseNodes(text)
    const program = createProgram({ nodes })

    return {
      kind: 'Program',
      url,
      text,
      theme,
      fullscreen,
      program,
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        kind: 'Error',
        url,
        text,
        theme,
        fullscreen,
        error,
      }
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
