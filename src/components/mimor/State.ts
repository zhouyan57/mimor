import { Program } from './Program'
import { Theme } from './Theme'

export type State = {
  kind: string
  src: string
  text: string
  theme: Theme
  withMetaThemeColor?: boolean
  themeColor?: string
  program?: Program
  error?: Error
  isFullscreen: boolean
}
