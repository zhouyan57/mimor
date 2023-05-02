import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { Entry } from './Entry'
import { State } from './State'
import { pathFormat } from './pathFormat'
import { pathParse } from './pathParse'

export async function stateMakeEntryPublic(
  state: State,
  entry: Entry,
): Promise<void> {
  if (entry.isPublic) {
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

  const newPath = pathFormat({
    ...pathParse(entry.path),
    isPublic: true,
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
  entry.isPublic = true
}