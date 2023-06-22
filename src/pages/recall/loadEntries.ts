import { loadContent } from '../../models/content/loadContent'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { Entry } from './Entry'

export async function loadEntries(): Promise<Array<Entry>> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const auth = useGlobalAuth()

  if (!auth.username) {
    return []
  }

  const response = await fetch(
    new URL(
      `users/${auth.username}/recall?kind=data-find&page=1&size=10000`,
      url,
    ),
    {
      method: 'GET',
      headers: {
        authorization: token.authorization,
      },
    },
  )

  const entries: Array<Record<string, any>> = await response.json()

  const promises = entries.map(async (entry) => ({
    path: entry.src.slice('~/'.length),
    src: entry.src,
    text: await loadContent(entry.src),
    createdAt: entry['@createdAt'],
    updatedAt: entry['@updatedAt'],
    reversion: entry['@reversion'],
  }))

  return await promiseAllFulfilled(promises)
}
