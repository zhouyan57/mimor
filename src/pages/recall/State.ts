import { Entry } from './Entry'

export type State = {
  entries: Array<Entry>
  isAtTheTop?: boolean
  scrollToTopTick?: number
  isSearching?: boolean
  eagerLoadAll?: boolean
  focusedPath?: string
}
