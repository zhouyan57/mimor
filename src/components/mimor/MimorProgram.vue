<script setup lang="ts">
import { MimorState as State } from "./MimorState"
import { routes } from "./routes"

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <component
      v-if="routes[state.program.current.tag]"
      :is="routes[state.program.current.tag]"
    />
    <div v-else>Unknown tag: {{ state.program.current.tag }}</div>
  </div>
</template>
