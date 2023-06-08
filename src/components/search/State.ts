export type SearchTarget = {
  keywords: Array<string>
  text: string
}

export type MatchedLine = {
  index: number
  line: string
}

export type SearchResult = {
  matchedLines: Array<MatchedLine>
}

export type State = {
  text: string
  isFocused?: boolean
  targets: Record<string, SearchTarget>
  results: Record<string, SearchResult>
}
