import { Connection } from './Connection'
import { State } from './State'
import { stateConnectionReadFileEntries } from './stateConnectionReadFileEntries'
import { stateFileEntrySave } from './stateFileEntrySave'

export async function stateConnectionUpload(
  state: State,
  connection: Connection,
): Promise<void> {
  connection.isUploading = true

  const fileEntries = await stateConnectionReadFileEntries(state, connection)

  for (const fileEntry of fileEntries) {
    stateFileEntrySave(state, fileEntry)
  }

  connection.isUploading = false
}
