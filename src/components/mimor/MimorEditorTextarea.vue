<script setup lang="ts">
import { State } from './State'

defineProps<{
  state: State
}>()
</script>

<template>
  <textarea
    class="h-full px-3 py-2.5 font-mono text-base"
    :class="{
      'border-x border-b border-black': state.theme.name !== 'white',
    }"
    v-model="state.text"
  />
</template>
