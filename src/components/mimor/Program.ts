import { isElement, XNode } from '@xieyuheng/x-node'
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

    const elements = nodes.filter(isElement)
    this.remainingIndexes = rangeArray(0, elements.length)
    const index = this.remainingIndexes.shift()
    if (index === undefined) {
      throw new Error('No cards.')
    }

    this.pointer = index
  }
}
