import { State } from './State'
import { ensurePermission } from './ensurePermission'
import { loadConnection } from './loadConnection'
import { stateCacheSet } from './stateCacheSet'

export async function stateConnectDirectoryHandle(
  state: State,
  directoryHandle: FileSystemDirectoryHandle,
): Promise<void> {
  if (!(await ensurePermission(directoryHandle))) {
    return
  }

  state.latestDirectoryHandle = directoryHandle
  const connection = await loadConnection(state, directoryHandle)
  state.connection = connection
  await stateCacheSet(state)
}
