import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { User } from './User'
import { username } from './username'

export function userAvatarURL(user: User) {
  const { url } = useGlobalBackend()

  const avatarPath = `/users/${username(user)}/public/assets/avatar`
  const avatarURL = new URL(`${avatarPath}?kind=file`, url)
  return avatarURL
}
