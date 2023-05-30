import { openDirectory } from './openDirectory'

export async function read(
  root: FileSystemDirectoryHandle,
  path: string,
): Promise<File> {
  let parent = root

  const parts = path.split('/')
  const directory = parts.slice(0, parts.length - 1).join('/')
  const file = parts[parts.length - 1]

  if (directory) {
    parent = await openDirectory(root, directory)
  }

  const fileHandle = await parent.getFileHandle(file)
  return fileHandle.getFile()
}
