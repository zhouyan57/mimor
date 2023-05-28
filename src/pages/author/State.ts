import { User } from '../../models/user/User'
import { Editor } from './Editor'
import { Entry } from './Entry'

export type State = {
  username: string
  user: User
  isSelf: boolean
  editor: Editor
  entries: Array<Entry>
  isLoadedFromCache?: boolean
  isFileSystemAccessSupported?: boolean
}
