import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { asyncRun } from '../../utils/asyncRun'
import { removeFirst } from '../../utils/removeFirst'
import { Entry } from './Entry'
import { State } from './State'
import { stateCacheSet } from './stateCacheSet'

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

  asyncRun(async () => {
    await stateCacheSet(state)
  })
}
