import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { Entry } from './Entry'
import { State } from './State'

export async function stateEntrySaveNewText(
  state: State,
  entry: Entry,
): Promise<void> {
  const who = 'stateEntrySaveNewText'

  // Should only save modified.
  if (entry.newText === undefined || entry.newText === entry.text) {
    return
  }

  entry.isSaving = true

  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  console.log({ who, entry })

  const response = await fetch(new URL(`${entry.path}?kind=file`, url), {
    method: 'PUT',
    headers: {
      authorization: token.authorization,
    },
    body: entry.newText,
  })

  entry.text = entry.newText
  entry.isSaving = false
  entry.isModifiedByUploading = false
  entry.isNotInTheCloud = false
}
