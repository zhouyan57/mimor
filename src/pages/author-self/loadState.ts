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

  return {
    username,
    user,
    editor: createEditor(),
    entries,
    isFileSystemAccessSupported:
      typeof window.showOpenFilePicker === 'function',
  }
}
