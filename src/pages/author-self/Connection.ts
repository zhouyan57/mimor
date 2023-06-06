export type ConnectionFileEntry = {
  path: string
  updatedAt: number
  text: string
}

export type Connection = {
  handle: FileSystemDirectoryHandle
  name: string
  isDownloading?: boolean
  isUploading?: boolean
  fileEntries: Array<ConnectionFileEntry>
}
