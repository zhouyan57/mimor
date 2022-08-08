<script setup lang="ts">
import { MimorState as State } from "./MimorState"

defineProps<{ state: State }>()
</script>

<template>
  <div>{{ state.program.pointer }}</div>
</template>
