import { State as SearchState } from '../../components/search/State'
import { User } from '../../models/user/User'
import { Connection } from './Connection'
import { Editor } from './Editor'
import { Entry } from './Entry'

export type State = {
  username: string
  user: User
  editor: Editor
  entries: Array<Entry>
  searchState: SearchState
  isSearching?: boolean
  isFileSystemAccessSupported?: boolean
  connection?: Connection
  isRefreshing?: boolean
  lastRefreshedAt?: number
  isSavingNewTexts?: boolean
  latestDirectoryHandle?: FileSystemDirectoryHandle
}
