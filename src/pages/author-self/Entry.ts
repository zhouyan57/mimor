export type Entry = {
  isPublic: boolean
  isTogglingVisibility?: boolean
  isDeleting?: boolean
  isSaving?: boolean
  isModifiedByUploading?: boolean
  isNotInTheCloud?: boolean
  path: string
  text?: string
  newText?: string
  createdAt: number
  updatedAt: number
}
