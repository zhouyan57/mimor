import { Editor } from './Editor'
import { MimorEntry } from './MimorEntry'

export type State = {
  username: string
  isSelf: boolean
  editor: Editor
  mimorEntries: Array<MimorEntry>
}
