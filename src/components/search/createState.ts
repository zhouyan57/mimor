import { SearchTarget, State } from './State'

export function createState(options: {
  targets: Record<string, SearchTarget>
}): State {
  const { targets } = options

  return {
    keywords: new Set(),
    text: '',
    targets,
    results: {},
  }
}
