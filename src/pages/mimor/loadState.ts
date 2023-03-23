import { State } from './State'

export type StateOptions = {
  url: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { url } = options
  const text = await loadText(url)

  return {
    url,
    text,
  }
}

async function loadText(url: string): Promise<string> {
  const response = await fetch(url)
  return await response.text()
}
