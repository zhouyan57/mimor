import { Program } from './Program'

export function programFormatProgress(program: Program): string {
  const remaining = program.remainingIndexes.length
  const passed = program.passedIndexes.length
  return `${passed} / ${remaining + passed}`
}
