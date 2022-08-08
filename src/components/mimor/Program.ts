import { Stmt } from "./Stmt"
import { XNode } from "../../libs/x-node"

export class Program {
  stmts: Array<Stmt> = []
  pointer: number = 0

  nodes: Array<XNode> = []

  constructor() {
    //
  }

  static fromNodes(nodes: Array<XNode>): Program {
    const program = new Program()
    program.nodes = nodes
    return program
  }

  get current(): Stmt {
    const stmt = this.stmts[this.pointer]
    if (!stmt) {
      throw new Error(`Program pointer out of bound.`)
    }

    return stmt
  }

  get finished(): boolean {
    return this.pointer === this.stmts.length
  }

  next(): void {
    if (this.finished) return

    this.current.execute(this)
    this.pointer++
  }
}
