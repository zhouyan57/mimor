import { Connection } from './Connection'
import { State } from './State'
import { stateReadConnectionFileEntries } from './stateReadConnectionFileEntries'

export async function loadConnection(
  state: State,
  handle: FileSystemDirectoryHandle,
): Promise<Connection> {
  const fileEntries = await stateReadConnectionFileEntries(state, handle)

  return {
    handle,
    name: handle.name,
    fileEntries,
  }
}
