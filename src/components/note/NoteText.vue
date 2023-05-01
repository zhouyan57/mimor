<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="overflow-y-auto whitespace-pre p-3 font-mono">
    {{ state.text }}
  </div>
</template>
