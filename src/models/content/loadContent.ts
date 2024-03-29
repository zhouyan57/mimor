import { useGlobalToken } from '../../reactives/useGlobalToken'
import { contentURL } from './contentURL'

export async function loadContent(src: string): Promise<string> {
  const headers: Record<string, string> = {}

  if (src.startsWith('~/')) {
    const token = useGlobalToken()
    headers.authorization = token.authorization
  }

  const response = await fetch(contentURL(src), {
    method: 'GET',
    headers,
  })

  const text = await response.text()
  return text
}
