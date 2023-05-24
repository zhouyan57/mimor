import * as Kv from 'idb-keyval'
import { State } from './State'
import { loadUsernames } from './loadUsernames'

export async function stateRefresh(state: State): Promise<void> {
  const usernames = await loadUsernames()
  state.usernames = usernames
  await Kv.set('Home/state.usernames', usernames)
}
