import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'

export async function loginByToken(
  options: {
    username: string
  },
  report: {
    errorMessage: string
  },
): Promise<void> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  report.errorMessage = ''

  const response = await fetch(
    new URL(`/users/${options.username}?kind=data`, url),
    {
      method: 'GET',
      headers: {
        authorization: token.authorization,
      },
    },
  )

  if (response.ok) {
    const auth = useGlobalAuth()
    auth.user = await response.json()
  } else {
    report.errorMessage = response.statusText
  }
}
