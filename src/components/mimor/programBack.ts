import { Program } from './Program'

export function programBack(program: Program): void {
  const index = program.rememberedIndexes.pop()
  if (index !== undefined) {
    program.remainingIndexes.unshift(program.pointer)
    program.pointer = index
  }
}
