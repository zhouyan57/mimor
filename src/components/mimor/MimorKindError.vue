<script setup lang="ts">
import { ParsingError } from '@xieyuheng/x-node'
import { State } from './State'

defineProps<{
  state: State
  error: Error
}>()
</script>

<template>
  <div>
    <div
      v-if="error instanceof ParsingError"
      class="rounded-sm border border-orange-300 bg-orange-200 px-3 py-2"
    >
      <div class="text-xl font-bold text-orange-500">ParsingError</div>
      <pre class="overflow-auto">{{ error.message }}</pre>
    </div>

    <div v-else class="rounded-sm border border-red-300 bg-red-200 px-3 py-2">
      <div class="text-xl font-bold text-red-500">Error</div>
      <pre class="overflow-auto">{{ error.message }}</pre>
    </div>
  </div>
</template>
