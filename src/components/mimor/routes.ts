import { Route } from './Route'
import BackCover from './cards/BackCover.vue'
import Cloze from './cards/Cloze.vue'
import FrontCover from './cards/FrontCover.vue'
import Question from './cards/Question.vue'
import { Theme } from './effects/Theme'
import Code from './nodes/Code.vue'

export const routes: Array<Route> = [
  { tag: 'front-cover', kind: 'Card', component: FrontCover },
  { tag: '封面', kind: 'Card', component: FrontCover },

  { tag: 'back-cover', kind: 'Card', component: BackCover },
  { tag: '封底', kind: 'Card', component: BackCover },

  { tag: 'question', kind: 'Card', component: Question },
  { tag: '问', kind: 'Card', component: Question },

  { tag: 'cloze', kind: 'Card', component: Cloze },
  { tag: '填空', kind: 'Card', component: Cloze },

  { tag: 'code', kind: 'Element', component: Code },
  { tag: '代码', kind: 'Element', component: Code },

  { tag: 'theme', kind: 'Effect', effect: Theme },
  { tag: '主题', kind: 'Effect', effect: Theme },
]
