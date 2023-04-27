import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { State } from './State'

export async function stateSave(
  state: State,
  report: {
    errorMessage: string
  },
): Promise<void> {
  const { url } = useGlobalBackend()

  report.errorMessage = ''

  const auth = useGlobalAuth()

  if (!auth.username) {
    return
  }

  if (!state.editor.filename) {
    return
  }

  const filename = `${state.editor.filename}.mimor`

  const endpoint = state.editor.isPublic
    ? `/users/${auth.username}/public/mimors/${filename}?kind=file`
    : `/users/${auth.username}/mimors/${filename}?kind=file`

  const response = await fetch(new URL(endpoint, url), {
    method: 'POST',
    headers: {
      authorization: useGlobalToken().authorization,
    },
    body: state.editor.text,
  })

  if (response.ok) {
    state.editor.text = ''
    state.editor.isEditing = false
  } else {
    report.errorMessage = response.statusText
  }
}
