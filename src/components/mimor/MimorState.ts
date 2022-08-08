import { parseNodes } from "../../libs/x-node"
import { mountRoutes } from "./mountRoutes"
import { Program } from "./models/Program"
import { Router } from "./models/Router"

export interface MimorOptions {
  text: string
}

export class MimorState {
  program: Program
  router = new Router()

  constructor(public options: MimorOptions) {
    this.program = new Program({ nodes: parseNodes(options.text) })
    mountRoutes(this.router)
  }
}
