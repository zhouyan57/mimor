import { isElement, XNode } from '@xieyuheng/x-node'
import { rangeArray } from '../../utils/rangeArray'
import { defaultEndingNodes } from './defaultEndingNodes'
import { Program } from './Program'
import { Router } from './Router'

export type ProgramOptions = {
  nodes: Array<XNode>
}

export function createProgram(options: ProgramOptions): Program {
  const nodes = options.nodes.find(
    (node) => isElement(node) && ['back-cover', '封底'].includes(node.tag),
  )
    ? [...options.nodes]
    : [...options.nodes, ...defaultEndingNodes()]

  const elements = nodes.filter(isElement)

  const remainingIndexes = rangeArray(0, elements.length)

  const index = remainingIndexes.shift()
  if (index === undefined) {
    throw new Error('No cards.')
  }

  const pointer = index

  const revealed = false
  const router = new Router()

  return {
    nodes,
    elements,
    router,
    pointer,
    remainingIndexes,
    revealed,
  }
}
