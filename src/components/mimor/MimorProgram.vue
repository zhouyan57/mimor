<script setup lang="ts">
import { MimorState as State } from "./MimorState"
import { routes } from "./routes"
import Unknown from "./views/Unknown.vue"

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <component
      v-if="routes[state.program.current.tag]"
      :is="routes[state.program.current.tag]"
    />
    <Unknown v-else :state="state" />
  </div>
</template>
