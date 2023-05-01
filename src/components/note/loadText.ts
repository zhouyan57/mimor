import { useGlobalToken } from '../../reactives/useGlobalToken'
import { srcURL } from './srcURL'

export async function loadText(src: string): Promise<string> {
  if (src.startsWith('~/')) {
    const token = useGlobalToken()

    const response = await fetch(srcURL(src), {
      method: 'GET',
      headers: {
        authorization: token.authorization,
      },
    })

    const text = await response.text()
    return text
  }

  const response = await fetch(srcURL(src))
  const text = await response.text()
  return text
}
