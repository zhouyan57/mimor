import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { Editor } from './Editor'

export async function editorSave(
  editor: Editor,
  report: {
    errorMessage: string
  },
): Promise<void> {
  const { url } = useGlobalBackend()

  const auth = useGlobalAuth()

  if (!auth.username) {
    return
  }

  report.errorMessage = ''

  const file = 'TODO.mimor'

  const endpoint = editor.isPublic
    ? `/users/${auth.username}/public/mimors/${file}?kind=file`
    : `/users/${auth.username}/mimors/${file}?kind=file`

  const response = await fetch(new URL(endpoint, url), {
    method: 'POST',
    headers: {
      authorization: useGlobalToken().authorization,
    },
    body: editor.text,
  })

  if (response.ok) {
    editor.text = ''
    editor.isEditing = false
  } else {
    report.errorMessage = response.statusText
  }
}
