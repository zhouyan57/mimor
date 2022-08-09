import { isElement, parseNodes, XElement, XNode } from "../../libs/x-node"
import { Router } from "./models/Router"
import { Theme } from "./models/Theme"
import { mountRoutes } from "./mountRoutes"

export interface MimorOptions {
  text: string
  onFinished: () => void
}

export class MimorState {
  router = new Router()
  theme = new Theme()
  nodes: Array<XNode>
  pointer: number = 0
  remaining: Array<number>
  revealed = false

  constructor(public options: MimorOptions) {
    this.nodes = parseNodes(options.text)
    this.remaining = [...Array(this.length).keys()]
    mountRoutes(this.router)
  }

  forgotten(): void {
    this.remaining.push(this.pointer)
    this.next()
  }

  remembered(): void {
    this.next()
  }

  next(): void {
    const index = this.remaining.shift()
    if (index === undefined) {
      this.options.onFinished()
    } else {
      this.pointer = index
      this.revealed = false
    }
  }

  get elements() {
    return this.nodes.filter(isElement)
  }

  get current(): XElement {
    if (this.remaining.length === 0) {
      throw new Error("No remaining statements.")
    }

    return this.elements[this.pointer]
  }

  get currentKey(): string {
    return JSON.stringify(this.current)
  }

  get length(): number {
    return this.elements.length
  }

  get finished(): boolean {
    return this.remaining.length === 0
  }

  get progress(): string {
    const remembered = this.length - this.remaining.length
    return `${remembered} / ${this.length}`
  }
}
