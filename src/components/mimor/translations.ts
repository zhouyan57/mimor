import { Translation } from './Translation'
import { translateColorName } from './translateColorName'

export const translations: Array<Translation> = [
  {
    tag: { from: '封面', to: 'front-cover' },
  },

  {
    tag: { from: '封底', to: 'back-cover' },
  },

  {
    tag: { from: '问', to: 'question' },
    children: [{ tag: { from: '答', to: 'answer' } }],
  },

  {
    tag: { from: '填空', to: 'cloze' },
    children: [{ tag: { from: '空', to: 'blank' } }],
  },

  {
    tag: { from: '代码', to: 'code' },
  },

  {
    tag: { from: '主题', to: 'theme' },
    attributes: [
      { from: '颜色', to: 'color', value: translateColorName },
      { from: '色', to: 'color', value: translateColorName },
    ],
  },
]
