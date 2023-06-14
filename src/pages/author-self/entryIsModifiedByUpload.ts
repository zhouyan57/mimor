import { Entry } from './Entry'

export function entryIsModifiedByUpload(entry: Entry): boolean {
  return entry.newText !== undefined && entry.newText !== entry.text
}
