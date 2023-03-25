import { State } from './State'

export type StateOptions = {}

export function createState(options: StateOptions): State {
  const {} = options

  return {
    isMobileMenuOpen: false,
  }
}
