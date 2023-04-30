import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { Entry } from './Entry'
import { mimorPathFormat } from './mimorPathFormat'
import { mimorPathParse } from './mimorPathParse'
import { State } from './State'

export async function stateMakeEntryPrivate(
  state: State,
  entry: Entry,
): Promise<void> {
  if (!entry.isPublic) {
    return
  }

  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const getResponse = await fetch(new URL(`${entry.path}?kind=file`, url), {
    method: 'GET',
    headers: {
      authorization: token.authorization,
    },
  })

  const newPath = mimorPathFormat({
    ...mimorPathParse(entry.path),
    isPublic: false,
  })

  const postResponse = await fetch(new URL(`${newPath}?kind=file`, url), {
    method: 'POST',
    headers: {
      authorization: token.authorization,
    },
    body: await getResponse.text(),
  })

  const deleteResponse = await fetch(new URL(`${entry.path}?kind=file`, url), {
    method: 'DELETE',
    headers: {
      authorization: token.authorization,
    },
  })

  entry.path = newPath
  entry.isPublic = false
}
