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

  const directories = options.isSelf
    ? [
        `/users/${username}/mimors`,
        `/users/${username}/notes`,
        `/users/${username}/public/mimors`,
        `/users/${username}/public/notes`,
      ]
    : [`/users/${username}/public/mimors`, `/users/${username}/public/notes`]

  const paths = (
    await Promise.all(directories.map(await loadPathsRecursively))
  ).flatMap((paths) => paths)

  const entries = await loadEntries(paths)

  return {
    username,
    isSelf: options.isSelf,
    editor: createEditor(),
    entries,
  }
}
