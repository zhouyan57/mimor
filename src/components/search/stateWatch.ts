import { debounce } from 'lodash'
import { watch } from 'vue'
import { State } from './State'
import { stateSearch } from './stateSearch'

export function stateWatch(state: State): void {
  watch(
    () => state.text,
    debounce(() => stateSearch(state), 300),
    { immediate: true },
  )

  watch(
    () => state.keywords,
    debounce(() => stateSearch(state), 300),
    { immediate: true, deep: true },
  )
}
