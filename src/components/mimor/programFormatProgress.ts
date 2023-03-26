import { Program } from './Program'

export function programFormatProgress(program: Program): string {
  const total = program.elements
    .map((element) => Number(Boolean(program.router.findCard(element))))
    .reduce((sum, count) => sum + count, 0)

  const remaining = program.remainingIndexes
    .map((index) => program.elements[index])
    .map((element) => Number(Boolean(program.router.findCard(element))))
    .reduce((sum, count) => sum + count, 0)

  const remembered = total - remaining
  return `${remembered} / ${total}`
}
