import { User } from '../../models/user/User'
import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { loadUserAvatar } from './loadUserAvatar'

export async function loadUser(username: string): Promise<User> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const response = await fetch(new URL(`/users/${username}`, url), {
    method: 'GET',
    headers: {
      authorization: token.authorization,
    },
  })

  const user = await response.json()
  const avatar = await loadUserAvatar(user)

  return { ...user, avatar }
}
