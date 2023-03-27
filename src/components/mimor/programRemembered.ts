import { Program } from './Program'
import { programNext } from './programNext'

export function programRemembered(program: Program): void {
  programNext(program)
}
