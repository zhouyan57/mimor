import * as Kv from 'idb-keyval'
import { loadUser } from '../../models/user/loadUser'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { State } from './State'
import { loadUsernames } from './loadUsernames'

export async function stateRefresh(state: State): Promise<void> {
  const usernames = await loadUsernames()
  const users = await promiseAllFulfilled(usernames.map(loadUser))
  state.users = users
  await Kv.set('mimor.app/Home/state.users', users)
}
