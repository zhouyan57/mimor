import { State } from './State'
import { targetMatchText } from './targetMatchText'

export function stateSearch(state: State): void {
  if (state.text) {
    stateFilterByText(state)
  } else {
    stateShowAllTarget(state)
  }

  stateFilterByKeywords(state)
}

function stateFilterByText(state: State): void {
  for (const [key, target] of Object.entries(state.targets)) {
    const result = targetMatchText(target, state.text)
    if (result) {
      state.results[key] = result
    } else {
      delete state.results[key]
    }
  }
}

function stateShowAllTarget(state: State): void {
  for (const key of Object.keys(state.targets)) {
    state.results[key] = {}
  }
}

function stateFilterByKeywords(state: State): void {
  for (const [key, result] of Object.entries(state.results)) {
    const target = state.targets[key]
    if (
      target &&
      !Array.from(state.keywords).every((keyword) =>
        target.keywords.includes(keyword),
      )
    ) {
      delete state.results[key]
    }
  }
}
