import { State } from './State'

export function stateEntryUpdate(
  state: State,
  options: { path: string; updatedAt?: number; text?: string },
): void {
  const found = state.entries.find((entry) => entry.path === options.path)
  if (!found) {
    return
  }

  if (options.updatedAt) {
    found.updatedAt = options.updatedAt
  }

  if (options.text) {
    found.text = options.text
  }
}
