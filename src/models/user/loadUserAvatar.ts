import { User } from '../../models/user/User'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { userAvatarURL } from './userAvatarURL'

export async function loadUserAvatar(
  user: User,
): Promise<Uint8Array | undefined> {
  const token = useGlobalToken()

  const response = await fetch(userAvatarURL(user), {
    method: 'GET',
    headers: {
      authorization: token.authorization,
    },
  })

  if (response.ok) {
    return new Uint8Array(await response.arrayBuffer())
  }
}
