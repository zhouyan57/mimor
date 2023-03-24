import { Router } from './Router'
import Cloze from './cards/Cloze.vue'
import Question from './cards/Question.vue'
import { Theme } from './effects/Theme'
import Code from './nodes/Code.vue'

export function routerDefineRoutes(router: Router): void {
  router.defineCard(['question', '问'], Question)
  router.defineCard(['cloze', '填空'], Cloze)
  router.defineEffect(['theme', '主题'], Theme)
  router.defineNode(['code', '代码'], Code)
}
