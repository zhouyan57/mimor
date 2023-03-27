import { Program } from './Program'

export function programFormatProgress(program: Program): string {
  const remaining = program.remainingIndexes.length
  const remembered = program.rememberedIndexes.length
  const total = remaining + remembered
  return `${remembered} / ${total}`
}
