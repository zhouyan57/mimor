import { parseNodes, ParsingError } from '../../libs/x-node'
import { Theme } from './models/Theme'
import { Program, ProgramOptions } from './models/Program'
import { mountRoutes } from './mountRoutes'

export interface MimorOptions {
  text: string
  program: ProgramOptions
}

export class MimorState {
  theme = new Theme('orange')
  program?: Program
  error?: Error
  parsingError?: ParsingError

  constructor(public options: MimorOptions) {
    try {
      const nodes = parseNodes(options.text)
      if (nodes.length === 0) {
        this.error = new Error('No cards.')
      } else {
        this.program = new Program(nodes, options.program)
        mountRoutes(this.program.router)
      }
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
