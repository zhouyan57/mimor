import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { loadMimorPathsRecursively } from './loadMimorPathsRecursively'
import { MimorEntry } from './MimorEntry'

export async function loadMimorEntriesPublic(
  username: string,
): Promise<Array<MimorEntry>> {
  const paths = await loadMimorPathsRecursively(
    `/users/${username}/public/mimors`,
  )

  return await Promise.all(
    paths.map(async (path) => {
      const { url } = useGlobalBackend()
      const token = useGlobalToken()

      const response = await fetch(new URL(`${path}?kind=file-metadata`, url), {
        method: 'GET',
        headers: {
          authorization: token.authorization,
        },
      })

      const fileMetadata = await response.json()

      return {
        isPublic: false,
        path,
        createdAt: fileMetadata.createdAt,
        updatedAt: fileMetadata.updatedAt,
      }
    }),
  )
}
