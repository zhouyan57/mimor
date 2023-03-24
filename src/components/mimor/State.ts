import { Program } from './Program'
import { Theme } from './Theme'

export type State = {
  kind: string
  url: string
  text: string
  fullscreen?: boolean
  theme: Theme
  program?: Program
  error?: Error
}
