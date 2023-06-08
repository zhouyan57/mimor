import { SearchTarget } from '../../components/search/State'
import { Entry } from './Entry'

export function entryUpdateSearchTargets(
  entry: Entry,
  targets: Record<string, SearchTarget>,
): void {
  targets[entry.path] = {
    keywords: [],
    text: entry.text || '',
  }
}
