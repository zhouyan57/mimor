import { programCurrentElement } from './programCurrentElement'
import { programNext } from './programNext'
import { routerFind } from './routerFind'
import { State } from './State'

export function stateMaybeApplyEffect(state: State): void {
  const program = state.program
  if (program === undefined) {
    return
  }

  const element = programCurrentElement(program)
  const route = routerFind(program.router, element)
  if (route?.kind === 'Effect') {
    route.effect({ state, program, element })
    programNext(program)
  }
}
