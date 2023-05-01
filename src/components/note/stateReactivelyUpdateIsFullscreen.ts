import { State } from './State'

export function stateReactivelyUpdateIsFullscreen(state: State): void {
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      state.isFullscreen = true
    } else {
      state.isFullscreen = false
    }
  })
}
