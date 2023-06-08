export type SearchTarget = {
  keywords: Array<string>
  text: string
}

export type SearchResult = {
  matchedLines: Array<{
    index: number
    line: string
  }>
}

export type State = {
  text: string
  isSearching?: boolean
  targets: Record<string, SearchTarget>
  results: Record<string, SearchResult>
}
