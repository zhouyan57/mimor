import { parseNodes } from "../../libs/x-node"
import { Program } from "./Program"

export interface MimorOptions {
  text: string
}

export class MimorState {
  program: Program

  constructor(public options: MimorOptions) {
    this.program = new Program({ nodes: parseNodes(options.text) })
  }
}
