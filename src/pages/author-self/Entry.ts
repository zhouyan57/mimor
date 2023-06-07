export type Entry = {
  isPublic: boolean
  isTogglingVisibility?: boolean
  isDeleting?: boolean
  isSaving?: boolean
  path: string
  text?: string
  uploadedText?: string
  createdAt: number
  updatedAt: number
}
