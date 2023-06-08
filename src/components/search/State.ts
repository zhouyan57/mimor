export type SearchTarget = {
  keywords: Array<string>
  text: string
}

export type SearchResult = {
  lines: Array<{ index: number; line: string }>
}

export type State = {
  targets: Record<string, SearchTarget>
  results: Record<string, SearchResult>
}
