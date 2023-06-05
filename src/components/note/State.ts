export type State = {
  src: string
  text: string
  originalText: string
  isEditing: boolean
  error?: Error
  isFullscreen: boolean
  isEditable?: boolean
  isLoadedFromCache?: boolean
}
