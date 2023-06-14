import { State as SearchState } from '../../components/search/State'
import { User } from '../../models/user/User'
import { Entry } from './Entry'

export type State = {
  username: string
  user: User
  entries: Array<Entry>
  isSearching?: boolean
  searchState: SearchState
  isRefreshing?: boolean
  lastRefreshedAt?: number
  eagerLoadAll?: boolean
}
