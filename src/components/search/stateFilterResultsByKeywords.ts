import { SearchResult, State } from './State'

export function stateFilterResultsByKeywords(
  state: State,
  results: Record<string, SearchResult>,
): Record<string, SearchResult> {
  return Object.fromEntries(
    Object.entries(results).filter(([key]) => {
      const target = state.targets[key]
      return (
        target &&
        Object.keys(state.keywords).every((keyword) =>
          target.keywords.includes(keyword),
        )
      )
    }),
  )
}
