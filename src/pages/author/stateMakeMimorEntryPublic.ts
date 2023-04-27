import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { MimorEntry } from './MimorEntry'
import { mimorPathFormat } from './mimorPathFormat'
import { mimorPathParse } from './mimorPathParse'
import { State } from './State'

export async function stateMakeMimorEntryPublic(
  state: State,
  mimorEntry: MimorEntry,
): Promise<void> {
  if (mimorEntry.isPublic) {
    return
  }

  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const getResponse = await fetch(
    new URL(`${mimorEntry.path}?kind=file`, url),
    {
      method: 'GET',
      headers: {
        authorization: token.authorization,
      },
    },
  )

  const newPath = mimorPathFormat({
    ...mimorPathParse(mimorEntry.path),
    isPublic: true,
  })

  const postResponse = await fetch(new URL(`${newPath}?kind=file`, url), {
    method: 'POST',
    headers: {
      authorization: token.authorization,
    },
    body: await getResponse.text(),
  })

  const deleteResponse = await fetch(
    new URL(`${mimorEntry.path}?kind=file`, url),
    {
      method: 'DELETE',
      headers: {
        authorization: token.authorization,
      },
    },
  )

  mimorEntry.path = newPath
  mimorEntry.isPublic = true
}
