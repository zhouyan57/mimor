import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { Entry } from './Entry'
import { mimorPathParse } from './mimorPathParse'

export async function loadEntries(paths: Array<string>): Promise<Array<Entry>> {
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

      const parsed = mimorPathParse(path)

      return {
        isPublic: parsed.isPublic,
        path,
        createdAt: fileMetadata.createdAt,
        updatedAt: fileMetadata.updatedAt,
      }
    }),
  )
}
