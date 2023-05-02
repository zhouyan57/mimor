import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { Entry } from './Entry'
import { pathParse } from './pathParse'

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

      const parsed = pathParse(path)

      return {
        isPublic: parsed.isPublic,
        isTogglingVisibility: false,
        path,
        createdAt: fileMetadata.createdAt,
        updatedAt: fileMetadata.updatedAt,
      }
    }),
  )
}
