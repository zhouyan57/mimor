import { XElement } from '@readonlylink/x-node'
import { Program } from './Program'

export function programCurrentElement(program: Program): XElement {
  return program.elements[program.pointer]
}
