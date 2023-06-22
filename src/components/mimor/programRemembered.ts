import { Program } from './Program'
import { programNext } from './programNext'

export function programRemembered(program: Program): void {
  program.rememberedIndexes.push(program.pointer)
  programNext(program)
}
