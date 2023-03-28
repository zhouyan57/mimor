import { State } from './State'

export type StateOptions = {
  //
}

export async function loadState(options: StateOptions): Promise<State> {
  const {} = options

  const origin = window.location.origin

  const list = [
    `${origin}/contents/examples/sisuo.mimor`,
    `${origin}/contents/examples/causal-reasoning.mimor`,
    `${origin}/contents/examples/do-not-forget.mimor`,
    `${origin}/contents/examples/99bottles/01-rediscovering-simplicity.mimor`,
    `${origin}/contents/examples/99bottles/02-test-driving-shameless-green.mimor`,
    `${origin}/contents/examples/99bottles/03-unearthing-concepts.mimor`,
    `${origin}/contents/examples/99bottles/04-practicing-horizontal-refactoring.mimor`,
    `${origin}/contents/examples/99bottles/05-separating-responsibilities.mimor`,
    `${origin}/contents/examples/99bottles/06-achieving-openness.mimor`,
    `${origin}/contents/examples/99bottles/07-manufacturing-intelligence.mimor`,
    `${origin}/contents/examples/99bottles/08-developing-a-programming-aesthetic.mimor`,
    `${origin}/contents/examples/99bottles/09-reaping-the-benefits-of-design.mimor`,
  ]

  return {
    list,
  }
}
