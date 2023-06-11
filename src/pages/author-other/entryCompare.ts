import { Entry } from './Entry'

export function entryCompare(x: Entry, y: Entry): number {
  return y.updatedAt - x.updatedAt
}
