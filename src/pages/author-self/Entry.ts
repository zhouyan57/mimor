export type Entry = {
  isPublic: boolean
  isTogglingVisibility?: boolean
  isDeleting?: boolean
  isSaving?: boolean
  path: string
  text?: string
  newText?: string
  createdAt: number
  updatedAt: number
  isModifiedByUploading?: boolean
}
