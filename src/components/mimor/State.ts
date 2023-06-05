import { Program } from './Program'
import { Theme } from './Theme'
import { StateOptions } from './loadState'

export type State = {
  options: StateOptions
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
