import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { State } from './State'

export async function stateAddToRecall(
  state: State,
  report: { errorMessage: string },
): Promise<void> {
  if (!state.username) {
    return
  }

  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  report.errorMessage = ''

  const response = await fetch(
    new URL(`/users/${state.username}/recall/${state.hash}?kind=data`, url),
    {
      method: 'POST',
      headers: {
        authorization: token.authorization,
      },
      body: JSON.stringify({
        src: state.src,
      }),
    },
  )

  if (response.ok) {
  } else {
    report.errorMessage = response.statusText
  }
}
