import { loadContent } from '../../models/content/loadContent'
import { State } from './State'
import { createState } from './createState'

export interface StateOptions {
  src: string
  isEditable?: boolean
}

export async function loadState(options: StateOptions): Promise<State> {
  const { src } = options

  const text = await loadContent(src)

  return createState({ ...options, text })
}
