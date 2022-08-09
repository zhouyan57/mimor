import { isElement, parseNodes, XElement, XNode } from "../../libs/x-node"
import { Router } from "./models/Router"
import { mountRoutes } from "./mountRoutes"

export interface MimorOptions {
  text: string
  onFinished: () => void
}

export class MimorState {
  router = new Router()
  nodes: Array<XNode>
  pointer: number = 0
  revealed = false

  constructor(public options: MimorOptions) {
    this.nodes = parseNodes(options.text)
    mountRoutes(this.router)
  }

  get elements() {
    return this.nodes.filter(isElement)
  }

  get current(): XElement {
    const element = this.elements[this.pointer]
    if (element === undefined) {
      throw new Error("The element pointer is out of bound.")
    }

    return element
  }

  get key(): string {
    return JSON.stringify(this.current)
  }

  get length(): number {
    return this.elements.length
  }

  get finished(): boolean {
    return this.pointer === this.length
  }

  get progress(): string {
    return `${this.pointer} / ${this.length}`
  }

  next(): void {
    this.pointer++
    this.revealed = false
    if (this.finished) {
      this.options.onFinished()
    }
  }
}
