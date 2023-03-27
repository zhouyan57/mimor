import { XElement, XNode } from '@xieyuheng/x-node'
import { Router } from './Router'

export type Program = {
  nodes: Array<XNode>
  elements: Array<XElement>
  router: Router
  pointer: number
  remainingIndexes: Array<number>
  passedIndexes: Array<number>
}
