import { contentSave } from '../../models/content/contentSave'
import { State } from './State'

export async function stateSave(state: State): Promise<void> {
  await contentSave(state.src, state.text)
  state.kind = 'Editor'
}
