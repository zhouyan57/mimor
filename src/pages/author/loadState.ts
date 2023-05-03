import { createEditor } from './Editor'
import { State } from './State'
import { loadEntries } from './loadEntries'
import { loadPathsRecursively } from './loadPathsRecursively'
import { loadUser } from './loadUser'

export type StateOptions = {
  username: string
  isSelf: boolean
}

export async function loadState(options: StateOptions): Promise<State> {
  const { username } = options

  const directories = options.isSelf
    ? [`/users/${username}/contents`, `/users/${username}/public/contents`]
    : [`/users/${username}/public/contents`]

  const paths = (
    await Promise.all(directories.map(await loadPathsRecursively))
  ).flatMap((paths) => paths)

  const entries = await loadEntries(paths)

  return {
    username,
    user: await loadUser(username),
    isSelf: options.isSelf,
    editor: createEditor(),
    entries,
  }
}
