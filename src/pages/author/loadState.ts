import { loadUser } from '../../models/user/loadUser'
import { userAvatarURL } from '../../models/user/userAvatarURL'
import { userHasAvatar } from '../../models/user/userHasAvatar'
import { createEditor } from './Editor'
import { State } from './State'
import { loadEntries } from './loadEntries'

export type StateOptions = {
  username: string
  isSelf: boolean
}

export async function loadState(options: StateOptions): Promise<State> {
  const { username } = options

  const user = await loadUser(username)
  const avatarURL = (await userHasAvatar(user))
    ? userAvatarURL(user)
    : undefined

  const directories = options.isSelf
    ? [`/users/${username}/contents`, `/users/${username}/public/contents`]
    : [`/users/${username}/public/contents`]

  const entries = (
    await Promise.all(directories.map(await loadEntries))
  ).flatMap((entries) => entries)

  return {
    username,
    user,
    avatarURL,
    isSelf: options.isSelf,
    editor: createEditor(),
    entries,
  }
}
