import { Program } from './Program'
import { Theme } from './Theme'

export type State = {
  url: string
  text: string
  fullscreen?: boolean
  viewSource: boolean
  theme: Theme
  program?: Program
  error?: Error
}
