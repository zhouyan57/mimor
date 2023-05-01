<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <textarea
    class="overflow-y-auto whitespace-pre-line p-3 font-mono"
    v-model="state.text"
  ></textarea>
</template>
