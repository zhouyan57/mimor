import { watch } from 'vue'
import { State } from './State'
import { stateMaybeApplyEffect } from './stateMaybeApplyEffect'

export function stateReactivelyMaybeApplyEffect(state: State) {
  watch(
    () => state.program?.pointer,
    () => {
      stateMaybeApplyEffect(state)
    },
    { immediate: true },
  )
}
