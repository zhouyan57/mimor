import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'

export async function loadPathsRecursively(
  directory: string,
): Promise<Array<string>> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const paths: Array<string> = []

  const response = await fetch(new URL(`${directory}?kind=directory`, url), {
    method: 'GET',
    headers: {
      authorization: token.authorization,
    },
  })

  const pathEntries = await response.json()

  for (const pathEntry of pathEntries) {
    if (pathEntry.kind === 'File' && pathEntry.path.endsWith('.mimor')) {
      paths.push(pathEntry.path)
    } else if (pathEntry.kind === 'Directory') {
      paths.push(...(await loadPathsRecursively(pathEntry.path)))
    }
  }

  return paths
}
