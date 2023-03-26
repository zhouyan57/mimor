import { markRaw } from 'vue'
import { Route } from './Route'
import { Router } from './Router'
import BackCover from './cards/BackCover.vue'
import Cloze from './cards/Cloze.vue'
import FrontCover from './cards/FrontCover.vue'
import Question from './cards/Question.vue'
import { Theme } from './effects/Theme'
import Code from './nodes/Code.vue'

export function createRouter(): Router {
  const routes: Array<Route> = [
    { tag: 'front-cover', kind: 'Card', component: markRaw(FrontCover) },
    { tag: '封面', kind: 'Card', component: markRaw(FrontCover) },

    { tag: 'back-cover', kind: 'Card', component: markRaw(BackCover) },
    { tag: '封底', kind: 'Card', component: markRaw(BackCover) },

    { tag: 'question', kind: 'Card', component: markRaw(Question) },
    { tag: '问', kind: 'Card', component: markRaw(Question) },

    { tag: 'cloze', kind: 'Card', component: markRaw(Cloze) },
    { tag: '填空', kind: 'Card', component: markRaw(Cloze) },

    { tag: 'code', kind: 'Node', component: markRaw(Code) },
    { tag: '代码', kind: 'Node', component: markRaw(Code) },

    { tag: 'theme', kind: 'Effect', effect: Theme },
    { tag: '主题', kind: 'Effect', effect: Theme },
  ]

  // router.defineTranslation({
  //   tag: ['问', 'question'],
  //   children: [{ tag: ['答', 'answer'] }],
  // })

  // router.defineTranslation({
  //   tag: ['主题', 'theme'],
  //   attributes: {
  //     颜色: 'color',
  //     色: 'color',
  //   },
  // })

  return { routes }
}
