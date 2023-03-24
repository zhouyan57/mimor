import { ParsingError } from '@xieyuheng/x-node'
import { Program } from './Program'
import { Theme } from './Theme'

export type State = {
  url: string
  text: string
  fullscreen?: boolean
  theme: Theme
  program?: Program
  error?: Error
  parsingError?: ParsingError
}
