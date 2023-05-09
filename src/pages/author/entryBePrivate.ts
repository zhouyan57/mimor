import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { Entry } from './Entry'
import { pathFormat } from './pathFormat'
import { pathParse } from './pathParse'

export async function entryBePrivate(entry: Entry): Promise<void> {
  if (!entry.isPublic) {
    return
  }

  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const newPath = pathFormat({ ...pathParse(entry.path), isPublic: false })

  const response = await fetch(new URL(`${entry.path}?kind=file-rename`, url), {
    method: 'POST',
    headers: {
      authorization: token.authorization,
    },
    body: JSON.stringify({ to: newPath }),
  })

  entry.updatedAt = Date.now()
  entry.path = newPath
  entry.isPublic = false
}
