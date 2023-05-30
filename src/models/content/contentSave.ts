import { useGlobalToken } from '../../reactives/useGlobalToken'
import { contentURL } from './contentURL'

export async function contentSave(src: string, text: string): Promise<void> {
  const headers: Record<string, string> = {}

  if (src.startsWith('~/')) {
    const token = useGlobalToken()
    headers.authorization = token.authorization
  }

  await fetch(new URL('?kind=file', contentURL(src)), {
    method: 'PUT',
    headers,
    body: text,
  })
}
