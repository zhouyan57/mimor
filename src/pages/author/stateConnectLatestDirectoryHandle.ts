import * as Kv from 'idb-keyval'
import { State } from './State'
import { createConnection } from './createConnection'
import { ensurePermission } from './ensurePermission'

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

  const store = Kv.createStore('mimor.app/authors', 'cache')
  const cached = await Kv.get(state.username, store)
  await Kv.set(
    state.username,
    {
      ...cached,
      latestDirectoryHandle: directoryHandle,
    },
    store,
  )
}
