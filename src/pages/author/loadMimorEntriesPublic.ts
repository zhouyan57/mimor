import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { MimorEntry } from './MimorEntry'

export async function loadMimorEntriesPublic(
  username: string,
): Promise<Array<MimorEntry>> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const mimorEntries: Array<MimorEntry> = []

  const response = await fetch(
    new URL(`/users/${username}/public/mimors?kind=directory`, url),
    {
      method: 'GET',
      headers: {
        authorization: token.authorization,
      },
    },
  )

  const pathEntries = await response.json()

  for (const pathEntry of pathEntries) {
    if (pathEntry.kind === 'File' && pathEntry.path.endsWith('.mimor')) {
      const response = await fetch(
        new URL(`${pathEntry.path}?kind=file-metadata`, url),
        {
          method: 'GET',
          headers: {
            authorization: token.authorization,
          },
        },
      )

      const fileMetadata = await response.json()

      mimorEntries.push({
        isPublic: true,
        path: pathEntry.path,
        createdAt: fileMetadata.createdAt,
        updatedAt: fileMetadata.updatedAt,
      })
    }
  }

  return mimorEntries
}
