import { Program } from './Program'
import { programRemainingElements } from './programRemainingElements'

export function programFormatProgress(program: Program): string {
  const total = program.elements.filter((element) =>
    program.router.findCard(element),
  ).length

  const remaining = programRemainingElements(program).filter((element) =>
    program.router.findCard(element),
  ).length

  const remembered = total - remaining
  return `${remembered} / ${total}`
}
