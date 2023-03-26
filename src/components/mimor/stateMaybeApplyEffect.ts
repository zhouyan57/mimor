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

  if (effect !== undefined) {
    console.log({
      who,
      pointer: program.pointer,
      stmtKind: 'Effect',
      tag: element.tag,
      element,
    })

    effect({ state, program, element })

    programNext(program)
  } else {
    const stmtKind = program.router.findCard(element) ? 'Card' : 'Unknown'

    console.log({
      who,
      pointer: program.pointer,
      stmtKind,
      tag: element.tag,
      element,
    })
  }
}
