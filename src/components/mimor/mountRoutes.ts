import Cloze from "./components/Cloze.vue"
import Question from "./components/Question.vue"
import Theme from "./components/Theme.vue"
import { Router } from "./models/Router"

export function mountRoutes(router: Router): void {
  router.stmts.component(["question", "问"], Question)
  router.stmts.component(["cloze", "填空"], Cloze)
  router.stmts.component(["theme", "主题"], Theme)
}
