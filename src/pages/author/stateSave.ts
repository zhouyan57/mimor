import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { createEditor, Editor } from './Editor'
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

  const targetPath = editorTargetPath(state.editor)
  if (!targetPath) {
    return
  }

  const path = `/users/${state.username}${targetPath}`

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

function editorTargetPath(editor: Editor): string | undefined {
  if (!editor.filename.trim()) {
    return
  }

  const visibilityDirectory = editor.isPublic ? `/public` : ``
  const modeDirectory = editorModeDirectory(editor)

  return `${visibilityDirectory}${modeDirectory}/${editor.filename}.${editor.mode}`
}

function editorModeDirectory(editor: Editor): string {
  switch (editor.mode) {
    case 'mimor': {
      return '/mimors'
    }

    case 'md': {
      return '/nodes'
    }
  }
}
