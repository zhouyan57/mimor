import { User } from '../../models/user/User'

export type State = {
  users: Array<User>
  isLoadedFromCache?: boolean
}
