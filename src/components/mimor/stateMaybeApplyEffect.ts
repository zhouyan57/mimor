import { programNext } from './programNext'
import { State } from './State'

export function stateMaybeApplyEffect(state: State): void {
  const who = 'stateMaybeApplyEffect'

  const program = state.program
  if (program === undefined) {
    return
  }

  const element = program.currentElement
  const effect = program.router.findEffect(element)

  if (effect) {
    effect({ state, program, element })
    programNext(program)
  }
}
