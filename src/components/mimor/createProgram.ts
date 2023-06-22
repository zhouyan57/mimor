import { isElement, parse, XElement, XNode } from '@xieyuheng/x-node'
import { rangeArray } from '../../utils/rangeArray'
import { createMetadata } from './createMetadata'
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
  const nodes = translate(translations, options.nodes)
  const metadata = createMetadata(nodes)
  const elements = createElements(nodes)
  const backCoverElement =
    findBackCoverElement(nodes) || defaultBackCoverElement()

  const remainingIndexes = rangeArray(0, elements.length)

  return {
    metadata,
    elements,
    backCoverElement,
    router,
    remainingIndexes,
    rememberedIndexes: [],
  }
}

function createElements(nodes: Array<XNode>): Array<XElement> {
  return nodes
    .filter(isElement)
    .filter(
      (element) => element.tag !== 'metadata' && element.tag !== 'back-cover',
    )
}

function findBackCoverElement(nodes: Array<XNode>): XElement | undefined {
  return nodes.filter(isElement).find((element) => element.tag === 'back-cover')
}

function defaultBackCoverElement(): XElement {
  const nodes = parse(`<back-cover>The End</back-cover>`)
  const firstNode = nodes[0]
  if (firstNode && isElement(firstNode)) {
    return firstNode
  } else {
    throw new Error(`defaultBackCoverElement expect firstNode to be element`)
  }
}
