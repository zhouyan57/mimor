<script setup lang="ts">
import RecallEntryMimor from './RecallEntryMimor.vue'
import RecallEntryInfo from './RecallEntryInfo.vue'
import { State } from './State'
import { Entry } from './Entry'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col space-y-1 py-2">
      <RecallEntryInfo :state="state" :entry="entry" />
    </div>

    <RecallEntryMimor :state="state" :entry="entry" />
  </div>
</template>
