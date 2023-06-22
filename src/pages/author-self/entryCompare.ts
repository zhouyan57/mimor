import { Entry } from './Entry'

export function entryCompare(x: Entry, y: Entry): number {
  if (y.isModifiedByUpload && !x.isModifiedByUpload) {
    return 1
  }

  if (!y.isModifiedByUpload && x.isModifiedByUpload) {
    return -1
  }

  return y.updatedAt - x.updatedAt
}
