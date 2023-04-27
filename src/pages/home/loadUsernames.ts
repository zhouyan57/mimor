import { basename } from 'path-browserify'
import { useGlobalBackend } from '../../reactives/useGlobalBackend'

export async function loadUsernames(): Promise<Array<string>> {
  const { url } = useGlobalBackend()

  const response = await fetch(new URL('/users?kind=directory', url), {
    method: 'GET',
  })

  const fileEntries = await response.json()

  const usernames: Array<string> = []

  for (const fileEntry of fileEntries) {
    if (fileEntry.kind === 'Directory') {
      const username = basename(fileEntry.path)
      usernames.push(username)
    }
  }

  return usernames
}
