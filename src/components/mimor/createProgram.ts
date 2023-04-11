import { isElement, parse, XElement, XNode } from '@xieyuheng/x-node'
import { rangeArray } from '../../utils/rangeArray'
import { createRouter } from './createRouter'
import { Metadata } from './Metadata'
import { Program } from './Program'
import { routes } from './routes'
import { translate } from './translate'
import { translations } from './translations'

export type ProgramOptions = {
  nodes: Array<XNode>
}

export function createProgram(options: ProgramOptions): Program {
  const who = 'createProgram'

  const router = createRouter({ routes })
  const nodes = translate(translations, options.nodes)
  const metadata = createMetadata(nodes)
  const elements = createElements(nodes)

  const remainingIndexes = rangeArray(0, elements.length)
  const index = remainingIndexes.shift()
  if (index === undefined) {
    throw new Error(`[${who}] no cards.`)
  }

  const pointer = index

  return {
    metadata,
    elements,
    router,
    pointer,
    remainingIndexes,
    passedIndexes: [],
  }
}

function createMetadata(nodes: Array<XNode>): Metadata {
  const metadata: Metadata = {
    rawKeywords: '',
    keywords: [],
    themeColor: 'white',
  }

  for (const node of nodes) {
    if (isElement(node) && node.tag === 'metadata') {
      for (const [key, value] of Object.entries(node.attributes)) {
        if (key === 'theme-color') {
          metadata.themeColor = value
        }

        if (key === 'keywords') {
          metadata.rawKeywords = value.trim()
          metadata.keywords = value
            .split(',')
            .flatMap((part) => part.split('，').map((part) => part.trim()))
        }
      }
    }
  }

  return metadata
}

function createElements(nodes: Array<XNode>): Array<XElement> {
  return maybeAppendEndingNodes(nodes)
    .filter(isElement)
    .filter((element) => element.tag !== 'metadata')
}

function maybeAppendEndingNodes(nodes: Array<XNode>): Array<XNode> {
  return nodes.find((node) => isElement(node) && node.tag === 'back-cover')
    ? [...nodes]
    : [...nodes, ...defaultEndingNodes()]
}

function defaultEndingNodes(): Array<XNode> {
  return parse(`<back-cover>The End</back-cover>`)
}
