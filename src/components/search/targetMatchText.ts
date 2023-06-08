import { SearchResult, SearchTarget } from './State'

export function targetMatchText(
  target: SearchTarget,
  input: string,
): SearchResult | undefined {
  const lines = target.text.split('\n')

  return undefined
}
