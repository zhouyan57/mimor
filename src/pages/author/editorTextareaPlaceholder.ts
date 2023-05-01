import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { Editor } from './Editor'

export function editorTextareaPlaceholder(editor: Editor): string {
  const lang = useGlobalLang()

  return lang.isZh() ? '创作谜墨卡片 *^-^*' : 'Create mimor cards :)'
}
