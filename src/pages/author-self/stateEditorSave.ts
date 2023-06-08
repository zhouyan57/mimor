import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { Editor, createEditor } from './Editor'
import { State } from './State'
import { entryReactive } from './entryReactive'

export async function stateEditorSave(
  state: State,
  report: {
    errorMessage: string
  },
): Promise<void> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  report.errorMessage = ''

  const targetPath = editorTargetPath(state.editor)
  if (!targetPath) {
    return
  }

  const path = `users/${state.username}${targetPath}`

  const response = await fetch(new URL(`${path}?kind=file`, url), {
    method: 'POST',
    headers: {
      authorization: token.authorization,
    },
    body: state.editor.text,
  })

  if (response.ok) {
    const now = Date.now()

    state.entries.push(
      entryReactive(
        {
          isPublic: state.editor.isPublic,
          path,
          text: state.editor.text,
          createdAt: now,
          updatedAt: now,
        },
        state.searchState.targets,
      ),
    )

    state.editor = createEditor()
  } else {
    report.errorMessage = response.statusText
  }
}

function editorTargetPath(editor: Editor): string | undefined {
  if (!editor.filename.trim()) {
    return
  }

  const visibilityDirectory = editor.isPublic ? `/public` : ``

  return `${visibilityDirectory}/contents/${editor.filename}.${editor.mode}`
}
