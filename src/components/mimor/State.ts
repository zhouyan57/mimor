import { Program } from './Program'
import { Theme } from './Theme'

export type State = {
  kind: string
  src: string
  text: string
  originalText: string
  theme: Theme
  withMetaThemeColor?: boolean
  themeColor?: string
  program?: Program
  error?: Error
  isFullscreen: boolean
  isEditable?: boolean
  isLoadedFromCache?: boolean
}
