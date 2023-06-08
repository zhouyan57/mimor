import { pathParse } from '../author/pathParse'
import { Entry } from './Entry'

export function entryKeywords(entry: Entry): Array<string> {
  const parsed = pathParse(entry.path)
  const parts = parsed.file.split('/')
  const prefixes = parts.slice(1)
  return prefixes.map((prefix) => prefix + '/')
}
