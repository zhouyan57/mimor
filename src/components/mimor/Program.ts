import { isElement, XElement, XNode } from '@xieyuheng/x-node'
import { defaultEndingNodes } from './defaultEndingNodes'
import { Router } from './Router'

export interface ProgramOptions {
  onFinished?: () => void
}

export class Program {
  router = new Router()
  pointer: number
  remaining: Array<number>
  revealed = false
  nodes: Array<XNode>

  constructor(nodes: Array<XNode>, public options: ProgramOptions) {
    this.nodes = nodes.find(
      (node) => isElement(node) && ['back-cover', '封底'].includes(node.tag),
    )
      ? [...nodes]
      : [...nodes, ...defaultEndingNodes()]

    this.remaining = [...Array(this.length).keys()]
    const index = this.remaining.shift()
    if (index === undefined) {
      throw new Error('No cards.')
    }

    this.pointer = index
  }

  replay(): void {
    this.remaining = [...Array(this.length).keys()]
    const index = this.remaining.shift()
    if (index === undefined) {
      throw new Error('No cards.')
    }

    this.pointer = index
    this.revealed = false
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
      if (this.options.onFinished) {
        this.options.onFinished()
      }
    } else {
      this.pointer = index
      this.revealed = false
    }
  }

  get elements() {
    return this.nodes.filter(isElement)
  }

  get currentElement(): XElement {
    return this.elements[this.pointer]
  }

  get length(): number {
    return this.elements.length
  }

  get finished(): boolean {
    return this.remaining.length === 0
  }

  get progress(): string {
    const total = this.elements
      .map((element) => Number(Boolean(this.router.findCard(element))))
      .reduce((sum, count) => sum + count, 0)

    const remaining = this.remaining
      .map((index) => this.elements[index])
      .map((element) => Number(Boolean(this.router.findCard(element))))
      .reduce((sum, count) => sum + count, 0)

    const remembered = total - remaining
    return `${remembered} / ${total}`
  }
}
