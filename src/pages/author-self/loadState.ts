import { createState as createSearchState } from '../../components/search/createState'
import { loadUser } from '../../models/user/loadUser'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { createEditor } from './Editor'
import { State } from './State'
import { entryReactive } from './entryReactive'
import { loadEntries } from './loadEntries'

export type StateOptions = {
  username: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { username } = options

  const user = await loadUser(username)

  const directories = [
    `/users/${username}/contents`,
    `/users/${username}/public/contents`,
  ]

  const state: State = {
    username,
    user,
    editor: createEditor(),
    searchState: createSearchState({ targets: {} }),
    entries: [],
    isFileSystemAccessSupported:
      typeof window.showOpenFilePicker === 'function',
  }

  state.entries = (await promiseAllFulfilled(directories.map(loadEntries)))
    .flatMap((entries) => entries)
    .map((entry) => entryReactive(entry, state))

  return state
}
