import { User } from '../../models/user/User'
import { userAvatarURL } from './userAvatarURL'

export async function loadUserAvatar(
  user: User,
): Promise<Uint8Array | undefined> {
  const response = await fetch(userAvatarURL(user), {
    method: 'GET',
  })

  if (response.ok) {
    return new Uint8Array(await response.arrayBuffer())
  }
}
