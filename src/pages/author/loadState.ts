import { createEditor } from './Editor'
import { State } from './State'
import { loadEntries } from './loadEntries'
import { loadPathsRecursively } from './loadPathsRecursively'

export type StateOptions = {
  username: string
  isSelf: boolean
}

export async function loadState(options: StateOptions): Promise<State> {
  const { username } = options

  const paths = options.isSelf
    ? [
        ...(await loadPathsRecursively(`/users/${username}/mimors`)),
        ...(await loadPathsRecursively(`/users/${username}/notes`)),
        ...(await loadPathsRecursively(`/users/${username}/public/mimors`)),
        ...(await loadPathsRecursively(`/users/${username}/public/notes`)),
      ]
    : [
        ...(await loadPathsRecursively(`/users/${username}/public/mimors`)),
        ...(await loadPathsRecursively(`/users/${username}/public/notes`)),
      ]

  const entries = await loadEntries(paths)

  return {
    username,
    isSelf: options.isSelf,
    editor: createEditor(),
    entries,
  }
}
