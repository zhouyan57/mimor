import { Connection } from './Connection'
import { State } from './State'

export async function stateConnectionUpload(
  state: State,
  connection: Connection,
): Promise<void> {
  connection.isUploading = true

  //

  connection.isUploading = false
}
