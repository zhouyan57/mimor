import { programCurrentElement } from './programCurrentElement'
import { programNext } from './programNext'
import { State } from './State'

export function stateMaybeApplyEffect(state: State): void {
  const program = state.program
  if (program === undefined) {
    return
  }

  const element = programCurrentElement(program)
  const effect = program.router.findEffect(element)

  if (effect) {
    effect({ state, program, element })
    programNext(program)
  }
}
