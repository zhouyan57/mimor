import { Editor } from './Editor'
import { MimorEntry } from './MimorEntry'

export type State = {
  isSelf: boolean
  editor: Editor
  mimorEntries: Array<MimorEntry>
}
