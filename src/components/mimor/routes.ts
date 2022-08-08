import { Component } from "vue"
import Cloze from "./stmts/Cloze.vue"
import Question from "./stmts/Question.vue"

export const routes: Record<string, Component> = {
  question: Question,
  问: Question,
  cloze: Cloze,
  填空: Cloze,
}
