<script setup lang="ts">
import AuthorOtherEntryMarkdown from './AuthorOtherEntryMarkdown.vue'
import AuthorOtherEntryMimor from './AuthorOtherEntryMimor.vue'
import { Entry } from './Entry'
import { State } from './State'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <AuthorOtherEntryMimor
    v-if="entry.path.endsWith('.mimor')"
    :state="state"
    :entry="entry"
  />

  <AuthorOtherEntryMarkdown
    v-else-if="entry.path.endsWith('.md')"
    :state="state"
    :entry="entry"
  />

  <AuthorSelfEntryUnknown v-else :state="state" :entry="entry" />
</template>
