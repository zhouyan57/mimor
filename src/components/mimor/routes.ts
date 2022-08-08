import { Component } from "vue"
import Cloze from "./views/Cloze.vue"
import Question from "./views/Question.vue"

export const routes: Record<string, Component> = {
  question: Question,
  问: Question,
  cloze: Cloze,
  填空: Cloze,
}
