<script setup lang="ts">
import { reactive } from 'vue'
import { LocationQueryRaw } from 'vue-router'
import Watch from '../../components/utils/Watch.vue'
import { useCurrentPathname } from '../../reactives/useCurrentPathname'
import { useCurrentQuery } from '../../reactives/useCurrentQuery'

defineProps<{
  name: string
  state: { open: boolean }
}>()

const local = reactive({
  isAfterCloseByRouteChange: false,
})
</script>

<template>
  <Watch
    :target="() => state.open"
    :action="
      (value) => {
        if (value) {
          $router.push({
            path: useCurrentPathname(),
            query: {
              ...useCurrentQuery(),
              [name]: null,
            } as LocationQueryRaw,
          })
        } else {
          if (!local.isAfterCloseByRouteChange) {
            $router.back()
          }
        }

        // Reset the flag.
        local.isAfterCloseByRouteChange = false
      }
    "
  />

  <Watch
    :target="() => $route.query[name]"
    :deep="true"
    :immediate="true"
    :action="
      (value) => {
        state.open = value !== undefined

        if (!state.open) {
          local.isAfterCloseByRouteChange = true
        }
      }
    "
  />
</template>
