import { XElement } from '@xieyuheng/x-node'
import { Program } from './Program'

export function programRemainingElements(program: Program): Array<XElement> {
  return program.remainingIndexes.map((index) => program.elements[index])
}
