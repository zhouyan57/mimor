import { State } from './State'

export async function stateEditorExit(state: State): Promise<void> {
  state.text = state.originalText
  state.kind = 'Program'
}
