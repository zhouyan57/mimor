import { Connection } from './Connection'

export function createConnection(
  handle: FileSystemDirectoryHandle,
): Connection {
  return {
    handle,
  }
}
