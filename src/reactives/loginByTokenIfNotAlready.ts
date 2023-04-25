import { loginByToken } from './loginByToken'
import { useGlobalAuth } from './useGlobalAuth'
import { useGlobalToken } from './useGlobalToken'

export async function loginByTokenIfNotAlready(): Promise<void> {
  const report = { errorMessage: '' }

  const token = useGlobalToken()

  if (!token.name) {
    return
  }

  const auth = useGlobalAuth()

  if (auth.user !== undefined) {
    return
  }

  if (auth.username) {
    try {
      await loginByToken({ username: auth.username }, report)
    } catch (_error) {}
  }
}
