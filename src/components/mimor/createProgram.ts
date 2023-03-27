import { isElement, parseNodes, XNode } from '@xieyuheng/x-node'
import { rangeArray } from '../../utils/rangeArray'
import { createRouter } from './createRouter'
import { Program } from './Program'
import { routes } from './routes'
import { translations } from './translations'

export type ProgramOptions = {
  nodes: Array<XNode>
}

export function createProgram(options: ProgramOptions): Program {
  const router = createRouter({ routes, translations })

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

  return {
    nodes,
    elements,
    router,
    pointer,
    remainingIndexes,
    revealed,
  }
}

function defaultEndingNodes(): Array<XNode> {
  return parseNodes(`<back-cover>The End</back-cover>`)
}
