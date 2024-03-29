import { createState as createSearchState } from '../../components/search/createState'
import { loadUser } from '../../models/user/loadUser'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { State } from './State'
import { loadEntries } from './loadEntries'

export type StateOptions = {
  username: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { username } = options

  const user = await loadUser(username)

  const directories = [`/users/${username}/public/contents`]

  const entries = (
    await promiseAllFulfilled(directories.map(await loadEntries))
  ).flatMap((entries) => entries)

  return {
    username,
    user,
    entries,
    searchState: createSearchState({ targets: {} }),
    lastRefreshedAt: Date.now(),
  }
}
