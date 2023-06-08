import { reactive, watch } from 'vue'
import { SearchTarget } from '../../components/search/State'
import { Entry } from './Entry'
import { entryUpdateSearchTargets } from './entryUpdateSearchTargets'

export function entryReactive(
  entry: Entry,
  targets: Record<string, SearchTarget>,
): Entry {
  entry = reactive(entry)

  watch(
    () => entry.text,
    () => entryUpdateSearchTargets(entry, targets),
    { immediate: true },
  )

  return entry
}
