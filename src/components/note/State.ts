export type State = {
  src: string
  text: string
  originalText: string
  isTextGiven?: boolean
  isEditing: boolean
  error?: Error
  isFullscreen: boolean
  isEditable?: boolean
  isLoadedFromCache?: boolean
}
