import { Entry } from './Entry'

export function entryIsModifiedByUpload(entry: Entry): boolean {
  return entry.uploadedText !== undefined && entry.uploadedText !== entry.text
}
