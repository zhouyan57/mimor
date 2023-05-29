export type Entry = {
  isPublic: boolean
  isTogglingVisibility?: boolean
  isDeleting?: boolean
  path: string
  text?: string
  createdAt: number
  updatedAt: number
}
