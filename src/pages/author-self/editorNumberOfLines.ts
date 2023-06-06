import { Editor } from './Editor'

export function editorNumberOfLines(editor: Editor) {
  const lines = editor.text.split('\n')
  if (editor.isEditing) {
    return Math.max(3, Math.min(10, lines.length))
  } else if (editor.text === '') {
    return Math.max(1, Math.min(10, lines.length))
  } else {
    return Math.max(3, Math.min(10, lines.length))
  }
}
