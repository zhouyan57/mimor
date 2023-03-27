import { isElement, parseNodes, XNode } from '@xieyuheng/x-node'
import { rangeArray } from '../../utils/rangeArray'
import { createRouter } from './createRouter'
import { Program } from './Program'
import { routes } from './routes'
import { translate } from './translate'
import { translations } from './translations'

export type ProgramOptions = {
  nodes: Array<XNode>
}

export function createProgram(options: ProgramOptions): Program {
  const router = createRouter({ routes })

  let nodes = translate(translations, options.nodes)

  nodes = nodes.find((node) => isElement(node) && node.tag === 'back-cover')
    ? [...nodes]
    : [...nodes, ...defaultEndingNodes()]

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
