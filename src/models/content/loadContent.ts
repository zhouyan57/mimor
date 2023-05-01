import { useGlobalToken } from '../../reactives/useGlobalToken'
import { contentURL } from './contentURL'

export async function loadContent(src: string): Promise<string> {
  if (src.startsWith('~/')) {
    const token = useGlobalToken()

    const response = await fetch(contentURL(src), {
      method: 'GET',
      headers: {
        authorization: token.authorization,
      },
    })

    const text = await response.text()
    return text
  }

  const response = await fetch(contentURL(src))
  const text = await response.text()
  return text
}
