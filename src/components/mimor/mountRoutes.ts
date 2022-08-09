import Cloze from "./components/Cloze.vue"
import Question from "./components/Question.vue"
import Theme from "./components/Theme.vue"
import { Router } from "./models/Router"

export function mountRoutes(router: Router): void {
  router.stmts.component(["question", "问"], Question)
  router.stmts.component(["cloze", "填空"], Cloze)
  router.stmts.effect(["theme", "主题"], ({ mimor, element }) => {
    const name = element.attributes["color"] || element.attributes["颜色"]
    if (!name) return
    mimor.theme.name = name
  })
}
