import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { Entry } from './Entry'
import { State } from './State'

export async function stateEntrySave(
  state: State,
  entry: Entry,
): Promise<void> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const response = await fetch(new URL(`${entry.path}?kind=file`, url), {
    method: 'PUT',
    headers: {
      authorization: token.authorization,
    },
    body: entry.text,
  })
}
