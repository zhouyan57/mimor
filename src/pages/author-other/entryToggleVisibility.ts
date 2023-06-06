import { Entry } from './Entry'
import { entryBePrivate } from './entryBePrivate'
import { entryBePublic } from './entryBePublic'

export async function entryToggleVisibility(entry: Entry): Promise<void> {
  if (entry.isPublic) {
    await entryBePrivate(entry)
  } else {
    await entryBePublic(entry)
  }
}
