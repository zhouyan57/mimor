import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { Entry } from './Entry'
import { State } from './State'

export async function stateEntrySaveUploadedText(
  state: State,
  entry: Entry,
): Promise<void> {
  const who = 'stateEntrySaveUploadedText'

  // Should only save modified.
  if (entry.uploadedText === undefined || entry.uploadedText === entry.text) {
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
    body: entry.uploadedText,
  })

  entry.text = entry.uploadedText
  entry.isSaving = false
}
