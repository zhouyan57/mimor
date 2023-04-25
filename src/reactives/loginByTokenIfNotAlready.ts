import { loginByToken } from './loginByToken'
import { useGlobalAuth } from './useGlobalAuth'
import { useGlobalToken } from './useGlobalToken'

export async function loginByTokenIfNotAlready(): Promise<void> {
  const report = { errorMessage: '' }

  const auth = useGlobalAuth()
  const token = useGlobalToken()

  if (!token.name) {
    return
  }

  if (auth.username) {
    auth.isLoadingUser = true

    try {
      await loginByToken({ username: auth.username }, report)
    } catch (_error) {}

    auth.isLoadingUser = false
  }
}
