import { isElement, XNode } from '@xieyuheng/x-node'
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
  const who = 'createProgram'

  const router = createRouter({ routes })
  const nodes = translate(translations, options.nodes)
  const metadata = createMetadata(nodes)
  const elements = nodes
    .filter(isElement)
    .filter((element) => element.tag !== 'metadata')

  const remainingIndexes = rangeArray(0, elements.length)

  return {
    metadata,
    elements,
    router,
    remainingIndexes,
    rememberedIndexes: [],
  }
}
