<script setup lang="ts">
import { State } from './State'
import { Entry } from './Entry'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <div>RecallEntryInfo</div>
</template>
