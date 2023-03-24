<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <textarea
      class="h-full w-full p-3 font-mono text-lg"
      v-model="state.text"
    />
  </div>
</template>
