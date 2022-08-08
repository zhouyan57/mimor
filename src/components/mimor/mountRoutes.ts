import { Router } from "./models/Router"
import Cloze from "./stmts/Cloze.vue"
import Question from "./stmts/Question.vue"

export function mountRoutes(router: Router): void {
  router.tags(["question", "问"], Question)
  router.tags(["cloze", "填空"], Cloze)
}
