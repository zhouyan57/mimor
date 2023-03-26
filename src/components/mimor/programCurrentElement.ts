import { XElement } from '@xieyuheng/x-node'
import { Program } from './Program'
import { programElements } from './programElements'

export function programCurrentElement(program: Program): XElement {
  const elements = programElements(program)
  return elements[program.pointer]
}
