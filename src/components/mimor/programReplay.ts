import { rangeArray } from '../../utils/rangeArray'
import { Program } from './Program'

export function programReplay(program: Program): void {
  const who = 'programReplay'

  program.passedIndexes = []
  program.remainingIndexes = rangeArray(0, program.elements.length)

  const index = program.remainingIndexes.shift()
  if (index === undefined) {
    throw new Error(`[${who}] no cards`)
  }

  program.pointer = index
}
