<script setup lang="ts">
import AuthorOtherEntryContent from './AuthorOtherEntryContent.vue'
import AuthorOtherEntryInfo from './AuthorOtherEntryInfo.vue'
import { Entry } from './Entry'
import { State } from './State'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col space-y-1 py-2">
      <AuthorOtherEntryInfo :state="state" :entry="entry" />
    </div>
    <AuthorOtherEntryContent :state="state" :entry="entry" />
  </div>
</template>
