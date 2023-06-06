export type ConnectionFileEntry = {
  path: string
  updatedAt: number
  text: string
}

export type ConnectionActivity = {
  name: string
  time: number
  report?: any
}

export type Connection = {
  handle: FileSystemDirectoryHandle
  name: string
  isDownloading?: boolean
  isUploading?: boolean
  fileEntries: Array<ConnectionFileEntry>
  activities: Array<ConnectionActivity>
}
