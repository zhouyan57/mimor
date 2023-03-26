import { isElement, XElement } from '@xieyuheng/x-node'
import { Program } from './Program'

export function programElements(program: Program): Array<XElement> {
  return program.nodes.filter(isElement)
}
