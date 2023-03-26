import { Program } from './Program'

export function programForgotten(program: Program): void {
  program.remainingIndexes.push(program.pointer)
  program.next()
}
