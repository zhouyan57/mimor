import { parseNodes } from '@xieyuheng/x-node'
import { Program, ProgramOptions } from './Program'
import { State } from './State'
import { Theme } from './Theme'
import { routerDefineRoutes } from './routerDefineRoutes'

export interface StateOptions {
  url: string
  text?: string
  fullscreen?: boolean
  program?: ProgramOptions
}

export async function loadState(options: StateOptions): Promise<State> {
  const { url, fullscreen } = options

  const text = options.text || (await loadText(url))

  const theme = new Theme('white')

  try {
    const nodes = parseNodes(text)
    const program = new Program(nodes, options.program || {})
    routerDefineRoutes(program.router)

    return {
      kind: 'Program',
      url,
      text,
      fullscreen,
      theme,
      program,
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        kind: 'Error',
        url,
        text,
        fullscreen,
        theme,
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