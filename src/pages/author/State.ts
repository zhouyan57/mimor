import { User } from '../../models/user/User'
import { Editor } from './Editor'
import { Entry } from './Entry'

export type State = {
  username: string
  user: User
  avatarURL?: URL
  isSelf: boolean
  editor: Editor
  entries: Array<Entry>
}
