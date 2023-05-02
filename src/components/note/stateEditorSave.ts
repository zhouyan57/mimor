import { contentSave } from '../../models/content/contentSave'
import { State } from './State'

export async function stateEditorSave(state: State): Promise<void> {
  await contentSave(state.src, state.text)

  state.originalText = state.text
  state.isEditing = false
}
