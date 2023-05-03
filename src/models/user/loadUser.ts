import { User } from '../../models/user/User'
import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'

export async function loadUser(username: string): Promise<User> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const response = await fetch(new URL(`/users/${username}`, url), {
    method: 'GET',
    headers: {
      authorization: token.authorization,
    },
  })

  return await response.json()
}
