import { loadUsernames } from './loadUsernames'
import { State } from './State'

export type StateOptions = {
  //
}

export async function loadState(options: StateOptions): Promise<State> {
  const usernames = await loadUsernames()

  return {
    usernames,
  }
}
