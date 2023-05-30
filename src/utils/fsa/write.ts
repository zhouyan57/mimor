import { mkdir } from './mkdir'

export async function write(
  root: FileSystemDirectoryHandle,
  path: string,
  text: string,
): Promise<void> {
  let parent = root

  const parts = path.split('/')
  const directory = parts.slice(0, parts.length - 1).join('/')
  const file = parts[parts.length - 1]

  if (directory) {
    parent = await mkdir(root, directory)
  }

  const fileHandle = await parent.getFileHandle(file, {
    create: true,
  })

  const writable = await fileHandle.createWritable()
  await writable.write(text)
  await writable.close()
}
