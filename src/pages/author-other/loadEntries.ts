import { PathEntry, PathEntryFile } from 'fidb/lib/path-entry'
import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
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

  // No need to load `text` for entry here,
  // let content components load `text`.

  const entries = pathEntries
    .filter<PathEntryFile>(
      (pathEntry): pathEntry is PathEntryFile =>
        pathEntry.kind === 'File' &&
        (pathEntry.path.endsWith('.mimor') || pathEntry.path.endsWith('.md')),
    )
    .map((pathEntry) => ({
      isPublic: pathParse(pathEntry.path).isPublic,
      path: pathEntry.path,
      createdAt: pathEntry.createdAt,
      updatedAt: pathEntry.updatedAt,
    }))

  return entries
}
