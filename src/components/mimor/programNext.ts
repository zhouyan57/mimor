import { Program } from './Program'

export function programNext(program: Program): void {
  const index = program.remainingIndexes.shift()
  if (index !== undefined) {
    program.passedIndexes.push(program.pointer)
    program.pointer = index
  }
}
