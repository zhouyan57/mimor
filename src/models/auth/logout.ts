import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalToken } from '../../reactives/useGlobalToken'

export async function logout(): Promise<void> {
  const token = useGlobalToken()
  token.name = ''

  const auth = useGlobalAuth()
  auth.username = undefined
  auth.user = undefined
}
