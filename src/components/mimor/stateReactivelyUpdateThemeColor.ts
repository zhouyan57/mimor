import { watch } from 'vue'
import { State } from './State'

export function stateReactivelyUpdateThemeColor(state: State): void {
  watch(
    () => state.metadata.themeColor,
    (value) => {
      state.theme.name = value
    },
  )
}
