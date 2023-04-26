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

  const response = await fetch(
    new URL(`/users/${auth.username}/mimors/${file}?kind=file`, url),
    {
      method: 'POST',
      headers: {
        authorization: useGlobalToken().authorization,
      },
      body: editor.text,
    },
  )

  if (response.ok) {
  } else {
    report.errorMessage = response.statusText
  }
}
