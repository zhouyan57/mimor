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
    console.log({
      who,
      pointer: program.pointer,
      tag: element.tag,
      element,
    })

    effect({ state, program, element })

    programNext(program)
  }
}
