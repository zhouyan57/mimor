import { XElement } from '@xieyuheng/x-node'
import { Metadata } from './Metadata'
import { Router } from './Router'

export type Program = {
  metadata: Metadata
  elements: Array<XElement>
  router: Router
  pointer: number
  remainingIndexes: Array<number>
  passedIndexes: Array<number>
}
