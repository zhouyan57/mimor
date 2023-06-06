import { User } from '../../models/user/User'
import { Entry } from './Entry'

export type State = {
  username: string
  user: User
  entries: Array<Entry>
  isLoadedFromCache?: boolean
  isRefreshing?: boolean
}
