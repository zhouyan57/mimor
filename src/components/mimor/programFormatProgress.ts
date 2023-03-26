import { Program } from './Program'
import { programElements } from './programElements'

export function programFormatProgress(program: Program): string {
  const elements = programElements(program)

  const total = elements
    .map((element) => Number(Boolean(program.router.findCard(element))))
    .reduce((sum, count) => sum + count, 0)

  const remaining = program.remainingIndexes
    .map((index) => elements[index])
    .map((element) => Number(Boolean(program.router.findCard(element))))
    .reduce((sum, count) => sum + count, 0)

  const remembered = total - remaining
  return `${remembered} / ${total}`
}
