import { watch } from 'vue'
import { State } from './State'
import { stateSearch } from './stateSearch'

export function stateWatch(state: State): void {
  watch(
    () => state.text,
    () => stateSearch(state),
    { immediate: true },
  )
}
