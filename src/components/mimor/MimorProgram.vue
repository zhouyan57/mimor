<script setup lang="ts">
import { MimorState as State } from "./MimorState"

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <pre>{{ state.program.elements }}</pre>
  </div>
</template>
