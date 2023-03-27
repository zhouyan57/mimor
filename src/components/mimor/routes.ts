import { Route } from './Route'
import BackCover from './cards/BackCover.vue'
import Cloze from './cards/Cloze.vue'
import FrontCover from './cards/FrontCover.vue'
import Metadata from './cards/Metadata.vue'
import Question from './cards/Question.vue'
import Code from './elements/Code.vue'

export const routes: Array<Route> = [
  { tag: 'metadata', kind: 'Card', component: Metadata },
  { tag: 'front-cover', kind: 'Card', component: FrontCover },
  { tag: 'back-cover', kind: 'Card', component: BackCover },
  { tag: 'question', kind: 'Card', component: Question },
  { tag: 'cloze', kind: 'Card', component: Cloze },
  { tag: 'code', kind: 'Element', component: Code },
]
