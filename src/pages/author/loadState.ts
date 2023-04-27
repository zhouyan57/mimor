import { createEditor } from './Editor'
import { State } from './State'
import { loadMimorEntries } from './loadMimorEntries'
import { loadMimorPathsRecursively } from './loadMimorPathsRecursively'

export type StateOptions = {
  username: string
  isSelf: boolean
}

export async function loadState(options: StateOptions): Promise<State> {
  const { username } = options

  const paths = options.isSelf
    ? [
        ...(await loadMimorPathsRecursively(`/users/${username}/mimors`)),
        ...(await loadMimorPathsRecursively(
          `/users/${username}/public/mimors`,
        )),
      ]
    : await loadMimorPathsRecursively(`/users/${username}/public/mimors`)

  const mimorEntries = await loadMimorEntries(paths)

  return {
    username,
    isSelf: options.isSelf,
    editor: createEditor(),
    mimorEntries,
  }
}
