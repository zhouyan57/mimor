import { State } from './State'

export async function stateConnect(state: State): Promise<void> {
  const directoryHandle = await window.showDirectoryPicker({
    mode: 'readwrite',
  })

  const connection = {
    handle: directoryHandle,
  }

  state.connection = connection
}
