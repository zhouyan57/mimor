import { State } from './State'
import { stateConnectDirectoryHandle } from './stateConnectLatestDirectoryHandle'

export async function stateConnect(state: State): Promise<void> {
  const directoryHandle = await window.showDirectoryPicker({
    mode: 'readwrite',
  })

  await stateConnectDirectoryHandle(state, directoryHandle)
}
