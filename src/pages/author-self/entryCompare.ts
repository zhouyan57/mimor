import { Entry } from './Entry'

export function entryCompare(x: Entry, y: Entry): number {
  if (y.isNotInTheCloud && !x.isNotInTheCloud) {
    return 1
  }

  if (!y.isNotInTheCloud && x.isNotInTheCloud) {
    return -1
  }

  if (y.isModifiedByUploading && !x.isModifiedByUploading) {
    return 1
  }

  if (!y.isModifiedByUploading && x.isModifiedByUploading) {
    return -1
  }

  return y.updatedAt - x.updatedAt
}
