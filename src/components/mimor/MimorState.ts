import { Program } from "./Program"
import { parseNodes } from "../../libs/x-node"

export interface MimorOptions {
  text: string
}

export class MimorState {
  program: Program

  constructor(public options: MimorOptions) {
    this.program = Program.fromNodes(parseNodes(options.text))
  }
}
