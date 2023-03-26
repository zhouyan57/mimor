import { Program } from './Program'
import { programNext } from './programNext'

export function programForgotten(program: Program): void {
  program.remainingIndexes.push(program.pointer)
  programNext(program)
}
