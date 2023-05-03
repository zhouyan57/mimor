import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { State } from './State'

export async function stateSave(
  state: State,
  report: { errorMessage: string },
): Promise<void> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  if (!state.username) {
    return
  }

  if (state.avatarFile) {
    const avatarPath = `/users/${state.username}/public/assets/avatar`
    const avatarURL = new URL(`${avatarPath}?kind=file`, url)
    const response = await fetch(avatarURL, {
      method: 'POST',
      headers: {
        authorization: token.authorization,
      },
      body: await state.avatarFile.arrayBuffer(),
    })

    if (response.ok) {
      state.avatarURL = avatarURL
    } else {
      report.errorMessage = response.statusText
      return
    }
  }

  if (state.user) {
    const response = await fetch(new URL(`/users/${state.username}`, url), {
      method: 'PATCH',
      headers: {
        authorization: token.authorization,
      },
      body: JSON.stringify(state.user),
    })

    if (response.ok) {
    } else {
      report.errorMessage = response.statusText
      return
    }
  }
}
