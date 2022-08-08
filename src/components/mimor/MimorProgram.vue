<script setup lang="ts">
import { MimorState as State } from "./MimorState"

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <pre>current: {{ state.program.current }}</pre>
    <pre>elements: {{ state.program.elements }}</pre>
  </div>
</template>
