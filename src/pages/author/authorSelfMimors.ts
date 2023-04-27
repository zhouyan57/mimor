import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { MimorEntry } from './MimorEntry'

export async function authorSelfMimors(
  username: string,
): Promise<Array<MimorEntry>> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const mimors: Array<MimorEntry> = []

  {
    const response = await fetch(
      new URL(`/users/${username}/mimors?kind=directory`, url),
      {
        method: 'GET',
        headers: {
          authorization: token.authorization,
        },
      },
    )

    const entries = await response.json()

    for (const entry of entries) {
      mimors.push({
        isPublic: false,
        path: entry.path,
      })
    }
  }

  {
    const response = await fetch(
      new URL(`/users/${username}/public/mimors?kind=directory`, url),
      {
        method: 'GET',
        headers: {
          authorization: token.authorization,
        },
      },
    )

    const entries = await response.json()

    for (const entry of entries) {
      mimors.push({
        isPublic: true,
        path: entry.path,
      })
    }
  }

  return mimors
}
