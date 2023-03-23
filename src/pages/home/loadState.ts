import { State } from './State'

export type StateOptions = {}

export async function loadState(options: StateOptions): Promise<State> {
  const text = await loadText()

  return {
    finished: false,
    text,
  }
}

async function loadText() {
  const response = await fetch('/contents/sisuo.mimor')
  const text = await response.text()
  return text
}
