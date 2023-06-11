import { PathEntry, PathEntryFile } from 'fidb/lib/path-entry'
import { loadContent } from '../../models/content/loadContent'
import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { pathParse } from '../author/pathParse'
import { Entry } from './Entry'

export async function loadEntries(directory: string): Promise<Array<Entry>> {
  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  const response = await fetch(
    new URL(`${directory}?kind=directory&recursive&page=1&size=10000`, url),
    {
      method: 'GET',
      headers: {
        authorization: token.authorization,
      },
    },
  )

  const pathEntries: Array<PathEntry> = await response.json()

  const promises = pathEntries
    .filter<PathEntryFile>(
      (pathEntry): pathEntry is PathEntryFile =>
        pathEntry.kind === 'File' &&
        (pathEntry.path.endsWith('.mimor') || pathEntry.path.endsWith('.md')),
    )
    .map(async (pathEntry) => ({
      isPublic: pathParse(pathEntry.path).isPublic,
      path: pathEntry.path,
      text: await loadContent(`~/${pathEntry.path}`),
      createdAt: pathEntry.createdAt,
      updatedAt: pathEntry.updatedAt,
    }))

  return await promiseAllFulfilled(promises)
}
