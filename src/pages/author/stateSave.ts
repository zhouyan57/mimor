import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { createEditor } from './Editor'
import { State } from './State'

export async function stateSave(
  state: State,
  report: {
    errorMessage: string
  },
): Promise<void> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  report.errorMessage = ''

  if (!state.editor.filename) {
    return
  }

  const filename = `${state.editor.filename}.${state.editor.mode}`

  const path = state.editor.isPublic
    ? `/users/${state.username}/public/mimors/${filename}`
    : `/users/${state.username}/mimors/${filename}`

  const response = await fetch(new URL(`${path}?kind=file`, url), {
    method: 'POST',
    headers: {
      authorization: token.authorization,
    },
    body: state.editor.text,
  })

  if (response.ok) {
    const now = Date.now()

    state.mimorEntries.push({
      isPublic: state.editor.isPublic,
      path,
      createdAt: now,
      updatedAt: now,
    })

    state.editor = createEditor()
  } else {
    report.errorMessage = response.statusText
  }
}
