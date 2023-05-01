<script setup lang="ts">
import { State } from './State'
import { stateNumberOfLines } from './stateNumberOfLines'

defineProps<{ state: State }>()
</script>

<template>
  <textarea
    class="overflow-y-auto whitespace-pre-line p-3 font-mono"
    :style="{ height: stateNumberOfLines(state) * 1.5 + 'rem' }"
    v-model="state.text"
  ></textarea>
</template>
