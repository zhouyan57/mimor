import { rangeArray } from '../../utils/rangeArray'
import { Program } from './Program'

export function programReplay(program: Program): void {
  program.rememberedIndexes = []
  program.remainingIndexes = rangeArray(0, program.elements.length)
}
