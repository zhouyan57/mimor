import { useGlobalBackend } from '../../reactives/useGlobalBackend'

export function contentURL(src: string): URL {
  if (src.startsWith('~/')) {
    const { url } = useGlobalBackend()

    const endpoint = src.slice('~/'.length)
    return new URL(endpoint, url)
  }

  return new URL(src)
}
