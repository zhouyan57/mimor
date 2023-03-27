import { XElement, XNode } from '@xieyuheng/x-node'
import { Metadata } from './Metadata'
import { Router } from './Router'

export type Program = {
  metadata: Metadata
  nodes: Array<XNode>
  elements: Array<XElement>
  router: Router
  pointer: number
  remainingIndexes: Array<number>
  passedIndexes: Array<number>
}
