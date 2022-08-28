import { parseNodes, ParsingError } from '../../libs/x-node'
import { Theme } from './models/Theme'
import { Program, ProgramOptions } from './models/Program'
import { mountRoutes } from './mountRoutes'

export interface MimorOptions {
  text: string
  fullscreen?: boolean
  program: ProgramOptions
}

export class MimorState {
  theme = new Theme('white')
  program?: Program
  error?: Error
  parsingError?: ParsingError

  constructor(public options: MimorOptions) {
    try {
      const nodes = parseNodes(options.text)
      this.program = new Program(nodes, options.program)
      mountRoutes(this.program.router)
    } catch (error) {
      if (error instanceof ParsingError) {
        this.parsingError = error
      } else if (error instanceof Error) {
        this.error = error
      } else {
        throw error
      }
    }
  }
}
