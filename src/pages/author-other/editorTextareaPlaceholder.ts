import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { Editor } from './Editor'

export function editorTextareaPlaceholder(editor: Editor): string {
  const lang = useGlobalLang()

  switch (editor.mode) {
    case 'mimor': {
      return lang.isZh() ? '创作谜墨卡片 *^-^*' : 'Create mimor cards :)'
    }

    case 'md': {
      return lang.isZh()
        ? '创作 Markdown 笔记 *^-^*'
        : 'Create markdown note :)'
    }
  }
}
