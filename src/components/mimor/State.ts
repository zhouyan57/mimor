import { Program } from './Program'
import { Theme } from './Theme'

export type State = {
  kind: string
  url: string
  text: string
  theme: Theme
  withMetaThemeColor?: boolean
  program?: Program
  error?: Error
}
