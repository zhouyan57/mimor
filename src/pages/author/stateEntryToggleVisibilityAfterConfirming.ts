import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { Entry } from './Entry'
import { State } from './State'
import { stateEntryToggleVisibility } from './stateEntryToggleVisibility'

export async function stateEntryToggleVisibilityAfterConfirming(
  state: State,
  entry: Entry,
): Promise<void> {
  const lang = useGlobalLang()

  const message = lang.isZh()
    ? toggleVisibilityMessageZh(entry)
    : toggleVisibilityMessageEn(entry)

  if (window.confirm(message)) {
    entry.isTogglingVisibility = true
    await stateEntryToggleVisibility(state, entry)
    entry.isTogglingVisibility = false
  }
}

function toggleVisibilityMessageZh(entry: Entry): string {
  if (entry.isPublic) {
    return `确定要将公开 mimor 变成私有吗？\n${entry.path}`
  } else {
    return `确定要将私有 mimor 变成公开吗？\n${entry.path}`
  }
}

function toggleVisibilityMessageEn(entry: Entry): string {
  if (entry.isPublic) {
    return `Are you sure to change this public mimor to private?\n${entry.path}`
  } else {
    return `Are you sure to change this private mimor to public?\n${entry.path}`
  }
}
