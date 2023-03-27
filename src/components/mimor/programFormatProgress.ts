import { Program } from './Program'

export function programFormatProgress(program: Program): string {
  const remembered = program.rememberedIndexes.length
  const total = program.elements.length
  return `${remembered} / ${total}`
}
