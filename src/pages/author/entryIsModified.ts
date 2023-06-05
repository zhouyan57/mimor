import { Entry } from './Entry'

export function entryIsModified(entry: Entry): boolean {
  return entry.uploadedText !== entry.text
}
