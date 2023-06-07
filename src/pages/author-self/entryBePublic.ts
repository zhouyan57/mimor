import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { pathFormat } from '../author/pathFormat'
import { pathParse } from '../author/pathParse'
import { Entry } from './Entry'

export async function entryBePublic(entry: Entry): Promise<void> {
  if (entry.isPublic) {
    return
  }

  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const newPath = pathFormat({
    ...pathParse(entry.path),
    isPublic: true,
  })

  const response = await fetch(new URL(`${entry.path}?kind=file-rename`, url), {
    method: 'POST',
    headers: {
      authorization: token.authorization,
    },
    body: JSON.stringify({ to: newPath }),
  })

  entry.updatedAt = Date.now()
  entry.path = newPath
  entry.isPublic = true
}
