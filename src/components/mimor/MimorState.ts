import { parseNodes } from "../../libs/x-node"
import { Program } from "./Program"
import { Router } from "./Router"
import { mountRoutes } from "./mountRoutes"

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
