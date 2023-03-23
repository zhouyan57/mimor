import { XElement } from '@xieyuheng/x-node'
import { State } from '../State'
import { Program } from './Program'

export type EffectOptions = {
  mimor: State
  program: Program
  element: XElement
}

export type Effect = (options: EffectOptions) => void
