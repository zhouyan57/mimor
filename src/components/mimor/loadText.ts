import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'

export async function loadText(src: string): Promise<string> {
  if (src.startsWith('~/')) {
    const { url } = useGlobalBackend()
    const token = useGlobalToken()

    const endpoint = `users/${src.slice('~/'.length)}`
    const response = await fetch(new URL(endpoint, url), {
      method: 'GET',
      headers: {
        authorization: token.authorization,
      },
    })

    const text = await response.text()
    return text
  }

  const response = await fetch(src)
  const text = await response.text()
  return text
}
