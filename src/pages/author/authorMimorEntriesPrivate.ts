import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { MimorEntry } from './MimorEntry'

export async function authorMimorEntriesPrivate(
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

  const fileEntries = await response.json()

  for (const fileEntry of fileEntries) {
    mimorEntries.push({
      isPublic: false,
      path: fileEntry.path,
    })
  }

  return mimorEntries
}
