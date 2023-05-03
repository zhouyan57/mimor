import { User } from '../../models/user/User'

export type State = {
  username?: string
  user?: User
  avatarURL?: URL
  avatarFile?: File
}
