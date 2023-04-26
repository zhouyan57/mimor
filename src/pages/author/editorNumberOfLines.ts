import { Editor } from './Editor'

export function editorNumberOfLines(editor: Editor) {
  const lines = editor.text.split('\n')
  return Math.max(3, Math.min(10, lines.length))
}
