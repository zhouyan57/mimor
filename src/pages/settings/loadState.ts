import { loginByTokenIfNotAlready } from '../../models/auth/loginByTokenIfNotAlready'
import { userAvatarURL } from '../../models/user/userAvatarURL'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { State } from './State'

export type StateOptions = {}

export async function loadState(options: StateOptions): Promise<State> {
  const {} = options

  const token = useGlobalToken()

  await loginByTokenIfNotAlready()

  const auth = useGlobalAuth()

  const state: State = {
    username: auth.username,
    user: auth.user,
  }

  if (state.user) {
    const avatarURL = userAvatarURL(state.user)
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
