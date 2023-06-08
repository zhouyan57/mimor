import { SearchTarget } from '../../components/search/State'
import { createState as createSearchState } from '../../components/search/createState'
import { loadUser } from '../../models/user/loadUser'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { createEditor } from './Editor'
import { State } from './State'
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

  const entries = (
    await promiseAllFulfilled(directories.map(await loadEntries))
  ).flatMap((entries) => entries)

  const targets: Record<string, SearchTarget> = Object.fromEntries(
    entries.map((entry) => {
      return [
        entry.path,
        {
          keywords: [],
          text: entry.text || '',
        },
      ]
    }),
  )

  return {
    username,
    user,
    editor: createEditor(),
    searchState: createSearchState({ targets }),
    entries,
    isFileSystemAccessSupported:
      typeof window.showOpenFilePicker === 'function',
  }
}
