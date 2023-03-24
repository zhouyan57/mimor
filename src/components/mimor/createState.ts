import { parseNodes, ParsingError } from '@xieyuheng/x-node'
import { Program, ProgramOptions } from './Program'
import { routerDefineRoutes } from './routerDefineRoutes'
import { State } from './State'
import { Theme } from './Theme'

export interface StateOptions {
  text: string
  fullscreen?: boolean
  program: ProgramOptions
}

export function createState(options: StateOptions): State {
  const { text, fullscreen } = options

  const theme = new Theme('white')

  try {
    const nodes = parseNodes(text)
    const program = new Program(nodes, options.program)
    routerDefineRoutes(program.router)
    return { text, fullscreen, theme, program }
  } catch (error) {
    if (error instanceof ParsingError) {
      return { text, fullscreen, theme, parsingError: error }
    } else if (error instanceof Error) {
      return { text, fullscreen, theme, error }
    } else {
      throw error
    }
  }
}
