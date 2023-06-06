import { State } from './State'
import { createConnection } from './createConnection'
import { ensurePermission } from './ensurePermission'
import { stateCacheSet } from './stateCacheSet'

export async function stateConnectDirectoryHandle(
  state: State,
  directoryHandle: FileSystemDirectoryHandle,
): Promise<void> {
  if (!(await ensurePermission(directoryHandle))) {
    return
  }

  state.latestDirectoryHandle = directoryHandle
  const connection = createConnection(directoryHandle)
  state.connection = connection
  await stateCacheSet(state)
}
