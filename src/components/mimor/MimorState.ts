import { parseNodes } from '../../libs/x-node'
import { Theme } from './models/Theme'
import { Program } from './models/Program'
import { mountRoutes } from './mountRoutes'

export interface MimorOptions {
  text: string
  onFinished: () => void
}

export class MimorState {
  theme = new Theme('orange')
  program?: Program
  error?: Error

  constructor(public options: MimorOptions) {
    const nodes = parseNodes(options.text)
    if (nodes) {
      this.error = new Error('No cards.')
    }

    this.program = new Program(nodes, options)

    mountRoutes(this.program.router)
  }
}
