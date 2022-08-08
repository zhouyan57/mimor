<script setup lang="ts">
import { MimorState as State } from "../../MimorState"

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <div>Unknown tag: {{ state.program.current.tag }}</div>
  </div>
</template>
