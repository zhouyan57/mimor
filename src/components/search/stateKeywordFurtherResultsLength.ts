import { State } from './State'
import { stateKeywordFurtherResults } from './stateKeywordFurtherResults'

export function stateKeywordFurtherResultsLength(
  state: State,
  keyword: string,
): number {
  return Object.keys(stateKeywordFurtherResults(state, keyword)).length
}
