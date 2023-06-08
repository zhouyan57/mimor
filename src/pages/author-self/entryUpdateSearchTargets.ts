import { SearchTarget } from '../../components/search/State'
import { Entry } from './Entry'
import { entryKeywords } from './entryKeywords'

export function entryUpdateSearchTargets(
  entry: Entry,
  targets: Record<string, SearchTarget>,
): void {
  targets[entry.path] = {
    keywords: entryKeywords(entry),
    text: entry.text || '',
  }
}
