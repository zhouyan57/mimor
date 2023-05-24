import * as Kv from 'idb-keyval'
import { loadUser } from '../../models/user/loadUser'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { State } from './State'
import { loadUsernames } from './loadUsernames'

export type StateOptions = {
  //
}

export async function loadState(options: StateOptions): Promise<State> {
  const cachedUsers = await Kv.get('Home/state.users')
  if (cachedUsers) {
    return {
      users: cachedUsers,
    }
  } else {
    const usernames = await loadUsernames()
    const users = await promiseAllFulfilled(usernames.map(loadUser))
    await Kv.set('Home/state.users', users)
    return {
      users,
    }
  }
}
