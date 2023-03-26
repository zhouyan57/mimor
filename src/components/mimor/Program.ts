import { XNode } from '@xieyuheng/x-node'
import { Router } from './Router'

export type Program = {
  nodes: Array<XNode>
  router: Router
  pointer: number
  remainingIndexes: Array<number>
  revealed: boolean
}
