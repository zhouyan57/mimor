import { isElement, XElement, XNode } from "../../../libs/x-node"

export interface ProgramOptions {
  nodes: Array<XNode>
  pointer?: number
}

export class Program {
  elements: Array<XElement>
  pointer: number

  constructor(public options: ProgramOptions) {
    this.elements = options.nodes.filter(isElement)
    this.pointer = options.pointer || 0
  }

  get current(): XElement {
    const element = this.elements[this.pointer]
    if (!element) {
      throw new Error(`Program pointer out of bound.`)
    }

    return element
  }

  get finished(): boolean {
    return this.pointer === this.elements.length
  }

  next(): void {
    if (this.finished) return
    this.pointer++
  }
}
