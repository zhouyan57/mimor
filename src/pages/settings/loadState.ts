import { loginByTokenIfNotAlready } from '../../models/auth/loginByTokenIfNotAlready'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { State } from './State'

export type StateOptions = {}

export async function loadState(options: StateOptions): Promise<State> {
  const {} = options

  const auth = useGlobalAuth()
  await loginByTokenIfNotAlready()

  return {
    username: auth.username,
    user: auth.user,
  }
}
