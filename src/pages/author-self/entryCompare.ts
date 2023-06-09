import { Entry } from './Entry'
import { entryIsModifiedByUpload } from './entryIsModifiedByUpload'

export function entryCompare(x: Entry, y: Entry): number {
  if (entryIsModifiedByUpload(y) && !entryIsModifiedByUpload(x)) {
    return 1
  }

  if (!entryIsModifiedByUpload(y) && entryIsModifiedByUpload(x)) {
    return -1
  }

  return y.updatedAt - x.updatedAt
}
