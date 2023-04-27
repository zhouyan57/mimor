import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { MimorEntry } from './MimorEntry'

export async function loadMimorEntriesPrivate(
  username: string,
): Promise<Array<MimorEntry>> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const mimorEntries: Array<MimorEntry> = []

  const response = await fetch(
    new URL(`/users/${username}/mimors?kind=directory`, url),
    {
      method: 'GET',
      headers: {
        authorization: token.authorization,
      },
    },
  )

  const pathEntries = await response.json()

  for (const pathEntry of pathEntries) {
    mimorEntries.push({
      isPublic: false,
      path: pathEntry.path,
    })
  }

  return mimorEntries
}
