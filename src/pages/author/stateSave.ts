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

  if (!state.editor.filename) {
    return
  }

  const filename = `${state.editor.filename}.mimor`

  const path = state.editor.isPublic
    ? `/users/${state.username}/public/mimors/${filename}`
    : `/users/${state.username}/mimors/${filename}`

  const response = await fetch(new URL(`${path}?kind=file`, url), {
    method: 'POST',
    headers: {
      authorization: useGlobalToken().authorization,
    },
    body: state.editor.text,
  })

  if (response.ok) {
    state.mimorEntries.push({
      isPublic: state.editor.isPublic,
      path,
    })

    state.editor.text = ''
    state.editor.isEditing = false
  } else {
    report.errorMessage = response.statusText
  }
}
