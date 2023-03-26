import { rangeArray } from '../../utils/rangeArray'
import { Program } from './Program'
import { programElements } from './programElements'

export function programReplay(program: Program): void {
  const who = 'programReplay'

  const elements = programElements(program)
  program.remainingIndexes = rangeArray(0, elements.length)
  const index = program.remainingIndexes.shift()
  if (index === undefined) {
    throw new Error(`[${who}] no cards`)
  }

  program.pointer = index
  program.revealed = false
}
