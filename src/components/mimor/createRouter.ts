import { Router } from './Router'
import BackCover from './cards/BackCover.vue'
import Cloze from './cards/Cloze.vue'
import FrontCover from './cards/FrontCover.vue'
import Question from './cards/Question.vue'
import { Theme } from './effects/Theme'
import Code from './nodes/Code.vue'

export function createRouter(): Router {
  const router = new Router()

  router.defineCard(['front-cover', '封面'], FrontCover)
  router.defineCard(['back-cover', '封底'], BackCover)
  router.defineCard(['question', '问'], Question)
  router.defineCard(['cloze', '填空'], Cloze)

  router.defineNode(['code', '代码'], Code)

  router.defineEffect(['theme', '主题'], Theme)

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

  return router
}
