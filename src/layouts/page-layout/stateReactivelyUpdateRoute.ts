import { watch } from 'vue'
import { Router } from 'vue-router'
import { currentQuery } from '../../utils/browser/currentQuery'
import { currentUrlPathname } from '../../utils/browser/currentUrlPathname'
import { State } from './State'

export function stateReactivelyUpdateRoute(state: State, router: Router) {
  watch(
    () => state.isMobileMenuOpen,
    (value) => {
      if (value) {
        router.push({
          path: currentUrlPathname(),
          query: {
            ...currentQuery(),
            'mobile-menu': null,
          },
        })
      }
    },
  )
}
