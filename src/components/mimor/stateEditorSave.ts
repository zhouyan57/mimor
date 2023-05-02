import { parse } from '@xieyuheng/x-node'
import { contentSave } from '../../models/content/contentSave'
import { State } from './State'
import { createProgram } from './createProgram'

export async function stateEditorSave(state: State): Promise<void> {
  await contentSave(state.src, state.text)

  const nodes = parse(state.text)
  const program = createProgram({ nodes })

  state.program = program
  state.kind = 'Program'
}
