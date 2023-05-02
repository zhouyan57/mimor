import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { Entry } from './Entry'
import { entryToggleVisibility } from './entryToggleVisibility'

export async function entryToggleVisibilityAfterConfirming(
  entry: Entry,
): Promise<void> {
  const lang = useGlobalLang()

  const message = lang.isZh()
    ? toggleVisibilityMessageZh(entry)
    : toggleVisibilityMessageEn(entry)

  if (window.confirm(message)) {
    entry.isTogglingVisibility = true
    await entryToggleVisibility(entry)
    entry.isTogglingVisibility = false
  }
}

function toggleVisibilityMessageZh(entry: Entry): string {
  if (entry.isPublic) {
    return `确定要将 公开 内容变成 私人 吗？\n${entry.path}`
  } else {
    return `确定要将 私人 内容变成 公开 吗？\n${entry.path}`
  }
}

function toggleVisibilityMessageEn(entry: Entry): string {
  if (entry.isPublic) {
    return `Are you sure to change this PUBLIC content to PRIVATE?\n${entry.path}`
  } else {
    return `Are you sure to change this PRIVATE content to PUBLIC?\n${entry.path}`
  }
}
