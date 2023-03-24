import { XElement } from '@xieyuheng/x-node'
import { Program } from './Program'
import { State } from './State'

export type EffectOptions = {
  state: State
  program: Program
  element: XElement
}

export type Effect = (options: EffectOptions) => void
