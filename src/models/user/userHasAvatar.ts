import { User } from '../../models/user/User'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { userAvatarURL } from './userAvatarURL'

export async function userHasAvatar(user: User): Promise<boolean> {
  const token = useGlobalToken()

  const response = await fetch(userAvatarURL(user), {
    method: 'GET',
    headers: {
      authorization: token.authorization,
    },
  })

  return response.ok
}
