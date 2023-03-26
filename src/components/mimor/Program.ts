import { isElement, XElement, XNode } from '@xieyuheng/x-node'
import { rangeArray } from '../../utils/rangeArray'
import { defaultEndingNodes } from './defaultEndingNodes'
import { Router } from './Router'

export class Program {
  router = new Router()
  pointer: number
  remainingIndexes: Array<number>
  revealed = false
  nodes: Array<XNode>

  constructor(nodes: Array<XNode>) {
    this.nodes = nodes.find(
      (node) => isElement(node) && ['back-cover', '封底'].includes(node.tag),
    )
      ? [...nodes]
      : [...nodes, ...defaultEndingNodes()]

    this.remainingIndexes = rangeArray(0, this.elements.length)
    const index = this.remainingIndexes.shift()
    if (index === undefined) {
      throw new Error('No cards.')
    }

    this.pointer = index
  }

  remembered(): void {
    this.next()
  }

  next(): void {
    const index = this.remainingIndexes.shift()
    if (index !== undefined) {
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
}
