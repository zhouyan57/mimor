import { ElementTranslation } from './ElementTranslation'

export const translations: Array<ElementTranslation> = [
  { tag: { from: '封面', to: 'front-cover' } },

  { tag: { from: '封底', to: 'back-cover' } },

  {
    tag: { from: '问', to: 'question' },
    children: [{ tag: { from: '答', to: 'answer' } }],
  },

  {
    tag: { from: '填空', to: 'cloze' },
    children: [{ tag: { from: '空', to: 'blank' } }],
  },

  { tag: { from: '代码', to: 'code' } },

  {
    tag: { from: '主题', to: 'theme' },
    attributes: [
      { from: '颜色', to: 'color', value: colorTranslation() },
      { from: '色', to: 'color', value: colorTranslation() },
    ],
  },
]

function colorTranslation(): Record<string, string> {
  return {
    白: 'white',
    红: 'red',
    赤: 'red',
    橙: 'orange',
    黄: 'yellow',
    绿: 'green',
    蓝: 'blue',
    青: 'blue',
    靛: 'indigo',
    紫: 'purple',
    墨: 'stone',
  }
}
