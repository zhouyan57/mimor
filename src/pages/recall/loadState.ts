import { Entry } from './Entry'
import { State } from './State'

export type StateOptions = {}

export async function loadState(options: StateOptions): Promise<State> {
  const {} = options

  const entries: Array<Entry> = []

  return {
    entries,
  }
}
