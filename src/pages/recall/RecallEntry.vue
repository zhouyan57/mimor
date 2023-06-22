<script setup lang="ts">
import RecallEntryMimor from './RecallEntryMimor.vue'
import { State } from './State'
import { Entry } from './Entry'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <div class="flex flex-col">
    <RecallEntryMimor :state="state" :entry="entry" />
  </div>
</template>
