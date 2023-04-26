import { Editor } from './Editor'

export async function editorSave(editor: Editor): Promise<void> {
  console.log(editor.text)
}
