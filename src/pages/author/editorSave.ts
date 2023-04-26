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

  report.errorMessage = ''

  const auth = useGlobalAuth()

  if (!auth.username) {
    return
  }

  if (!editor.filename) {
    return
  }

  const filename = `${editor.filename}.mimor`

  const endpoint = editor.isPublic
    ? `/users/${auth.username}/public/mimors/${filename}?kind=file`
    : `/users/${auth.username}/mimors/${filename}?kind=file`

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
