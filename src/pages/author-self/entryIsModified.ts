import { Entry } from './Entry'

export function entryIsModified(entry: Entry): boolean {
  return Boolean(entry.isModified)
}
