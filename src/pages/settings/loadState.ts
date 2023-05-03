import { loginByTokenIfNotAlready } from '../../models/auth/loginByTokenIfNotAlready'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { State } from './State'

export type StateOptions = {}

export async function loadState(options: StateOptions): Promise<State> {
  const {} = options

  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  await loginByTokenIfNotAlready()

  const auth = useGlobalAuth()

  const state: State = {
    username: auth.username,
    user: auth.user,
  }

  if (state.username) {
    const avatarPath = `/users/${state.username}/public/assets/avatar`
    const avatarURL = new URL(`${avatarPath}?kind=file`, url)
    const response = await fetch(avatarURL, {
      method: 'GET',
      headers: {
        authorization: token.authorization,
      },
    })

    if (response.ok) {
      state.avatarURL = avatarURL
    }
  }

  return state
}
