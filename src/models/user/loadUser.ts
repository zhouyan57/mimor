import { Base64 } from 'js-base64'
import { User } from '../../models/user/User'
import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { loadUserAvatar } from './loadUserAvatar'

export async function loadUser(username: string): Promise<User> {
  const { url } = useGlobalBackend()

  const response = await fetch(new URL(`/users/${username}`, url), {
    method: 'GET',
  })

  const user = await response.json()
  const avatar = await loadUserAvatar(user)
  const avatarBase64 = avatar && Base64.fromUint8Array(avatar)

  return { ...user, avatar, avatarBase64 }
}
