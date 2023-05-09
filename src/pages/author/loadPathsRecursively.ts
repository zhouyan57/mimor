import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'

export async function loadPathsRecursively(
  directory: string,
): Promise<Array<string>> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const paths: Array<string> = []

  const response = await fetch(
    new URL(`${directory}?kind=directory&recursive`, url),
    {
      method: 'GET',
      headers: {
        authorization: token.authorization,
      },
    },
  )

  const pathEntries = await response.json()

  for (const pathEntry of pathEntries) {
    console.log(pathEntry.path)
    if (pathEntry.kind === 'File') {
      if (pathEntry.path.endsWith('.mimor') || pathEntry.path.endsWith('.md')) {
        paths.push(pathEntry.path)
      }
    }
  }

  return paths
}
