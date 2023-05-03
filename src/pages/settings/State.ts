import { User } from '../../models/user/User'

export type State = {
  username: string
  user: User
  avatarURL?: string
  avatarFile?: File
}
