import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { loginByToken } from './loginByToken'
import { logout } from './logout'

export async function loginByTokenIfNotAlready(): Promise<void> {
  const who = 'loginByTokenIfNotAlready'
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
    } catch (error) {
      console.log({ who, message: 'fail to login by token', error })
      await logout()
    }
  }
}
