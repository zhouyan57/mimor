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

  get finished(): boolean {
    return this.pointer === this.elements.length
  }

  next(): void {
    this.pointer++
    if (this.finished) {
      this.options.onFinished()
    }
  }
}
