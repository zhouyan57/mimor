import { reactive, watch } from 'vue'
import { Entry } from './Entry'
import { State } from './State'
import { entryUpdateSearchTargets } from './entryUpdateSearchTargets'

export function entryReactive(entry: Entry, state: State): Entry {
  entry = reactive(entry)

  watch(
    () => entry,
    () => entryUpdateSearchTargets(entry, state),
    { immediate: true, deep: true },
  )

  return entry
}
