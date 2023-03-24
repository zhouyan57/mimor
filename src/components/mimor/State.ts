import { parseNodes, ParsingError } from '@xieyuheng/x-node'
import { Program, ProgramOptions } from './models/Program'
import { Theme } from './models/Theme'
import { mountRoutes } from './mountRoutes'

export interface StateOptions {
  text: string
  fullscreen?: boolean
  program: ProgramOptions
}

export class State {
  theme = new Theme('white')
  program?: Program
  error?: Error
  parsingError?: ParsingError

  constructor(public options: StateOptions) {
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
