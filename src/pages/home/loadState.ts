import * as Kv from 'idb-keyval'
import { State } from './State'
import { loadUsernames } from './loadUsernames'

export type StateOptions = {
  //
}

export async function loadState(options: StateOptions): Promise<State> {
  const cachedUsernames = await Kv.get('Home/state.usernames')
  if (cachedUsernames) {
    return {
      usernames: cachedUsernames,
    }
  } else {
    const usernames = await loadUsernames()
    await Kv.set('Home/state.usernames', usernames)
    return {
      usernames,
    }
  }
}
