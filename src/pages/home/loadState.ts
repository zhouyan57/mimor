import { State } from './State'

export type StateOptions = {
  //
}

export async function loadState(options: StateOptions): Promise<State> {
  const {} = options

  const origin = window.location.origin

  const list = [
    `${origin}/contents/examples/sisuo.mimor`,
    `${origin}/contents/examples/debug.mimor`,
  ]

  return {
    list,
  }
}
