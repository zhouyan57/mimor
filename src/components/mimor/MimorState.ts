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
  theme = new Theme("yellow")
  nodes: Array<XNode>
  pointer: number
  remaining: Array<number>
  revealed = false

  constructor(public options: MimorOptions) {
    this.nodes = parseNodes(options.text)
    this.remaining = [...Array(this.length).keys()]
    const index = this.remaining.shift()
    if (index === undefined) {
      throw new Error("initial nodes can not be empty.")
    }

    this.pointer = index
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
    const total = this.elements
      .map((element) =>
        Number(Boolean(this.router.stmts.findCard(element.tag)))
      )
      .reduce((sum, flag) => sum + flag, 0)

    const remaining = this.remaining
      .map((index) => this.elements[index])
      .map((element) =>
        Number(Boolean(this.router.stmts.findCard(element.tag)))
      )
      .reduce((sum, flag) => sum + flag, 0)

    const remembered = total - remaining
    return `${remembered} / ${total}`
  }
}
