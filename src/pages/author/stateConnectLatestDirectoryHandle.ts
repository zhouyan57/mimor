import { State } from './State'
import { createConnection } from './createConnection'
import { ensurePermission } from './ensurePermission'

export async function stateConnectDirectoryHandle(
  state: State,
  directoryHandle: FileSystemDirectoryHandle,
): Promise<void> {
  await ensurePermission(directoryHandle)
  state.latestDirectoryHandle = directoryHandle
  const connection = createConnection(directoryHandle)
  state.connection = connection
}
