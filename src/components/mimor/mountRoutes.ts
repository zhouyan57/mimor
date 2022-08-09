import { Router } from "./models/Router"
import Cloze from "./components/Cloze.vue"
import Question from "./components/Question.vue"
import Theme from "./components/Theme.vue"

export function mountRoutes(router: Router): void {
  router.stmt(["question", "问"], Question)
  router.stmt(["cloze", "填空"], Cloze)
  router.stmt(["theme", "主题"], Theme)
}
