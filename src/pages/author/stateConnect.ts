import { State } from './State'
import { createConnection } from './createConnection'
import { ensurePermission } from './ensurePermission'

export async function stateConnect(state: State): Promise<void> {
  const directoryHandle = await window.showDirectoryPicker({
    mode: 'readwrite',
  })

  await ensurePermission(directoryHandle)
  const connection = createConnection(directoryHandle)
  state.connection = connection

  state.latestDirectoryHandle = directoryHandle
}
