import { Router } from "./models/Router"
import Cloze from "./stmts/Cloze.vue"
import Question from "./stmts/Question.vue"

export function mountRoutes(router: Router): void {
  router.node(["question", "问"], Question)
  router.node(["cloze", "填空"], Cloze)
}
