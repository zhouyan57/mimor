import { StateOptions } from './loadState'

export type State = {
  options: StateOptions
  src: string
  text: string
  originalText: string
  isEditing: boolean
  error?: Error
  isFullscreen: boolean
  isEditable?: boolean
  isLoadedFromCache?: boolean
}
