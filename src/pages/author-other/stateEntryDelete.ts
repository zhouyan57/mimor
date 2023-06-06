import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { removeFirst } from '../../utils/removeFirst'
import { Entry } from './Entry'
import { State } from './State'

export async function stateEntryDelete(
  state: State,
  entry: Entry,
): Promise<void> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const response = await fetch(new URL(`${entry.path}?kind=file`, url), {
    method: 'DELETE',
    headers: {
      authorization: token.authorization,
    },
  })

  removeFirst(state.entries, ({ path }) => path === entry.path)
}
