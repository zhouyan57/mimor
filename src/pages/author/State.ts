import { Editor } from './Editor'
import { Entry } from './Entry'

export type State = {
  username: string
  isSelf: boolean
  editor: Editor
  entries: Array<Entry>
}
