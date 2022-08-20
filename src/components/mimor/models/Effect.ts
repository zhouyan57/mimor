import { XElement } from '../../../libs/x-node'
import { MimorState } from '../MimorState'
import { Program } from './Program'

export type EffectOptions = {
  mimor: MimorState
  program: Program
  element: XElement
}

export type Effect = (options: EffectOptions) => void
