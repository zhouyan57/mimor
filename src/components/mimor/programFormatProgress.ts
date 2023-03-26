import { Program } from './Program'
import { programRemainingElements } from './programRemainingElements'
import { routerFind } from './routerFind'

export function programFormatProgress(program: Program): string {
  const total = program.elements.filter(
    (element) => routerFind(program.router, element)?.kind === 'Card',
  ).length

  const remaining = programRemainingElements(program).filter(
    (element) => routerFind(program.router, element)?.kind === 'Card',
  ).length

  const remembered = total - remaining
  return `${remembered} / ${total}`
}
