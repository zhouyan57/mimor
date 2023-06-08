<script setup lang="ts">
import { SearchResult, State } from './State'

defineProps<{
  state: State
  result: SearchResult
}>()
</script>

<template>
  <div>
    <div>SearchResult</div>
    <div>{{ result }}</div>
  </div>
</template>
