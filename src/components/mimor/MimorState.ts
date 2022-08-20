import { parseNodes } from '../../libs/x-node'
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

  constructor(public options: MimorOptions) {
    const nodes = parseNodes(options.text)
    if (nodes.length === 0) {
      this.error = new Error('No cards.')
    } else {
      this.program = new Program(nodes, options.program)
      mountRoutes(this.program.router)
    }
  }
}
