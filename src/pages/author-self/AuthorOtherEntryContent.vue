<script setup lang="ts">
import AuthorOtherEntryMimor from './AuthorOtherEntryMimor.vue'
import AuthorOtherEntryMarkdown from './AuthorOtherEntryNote.vue'
import AuthorOtherEntryUnknown from './AuthorOtherEntryUnknown.vue'
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

  <AuthorOtherEntryUnknown v-else :state="state" :entry="entry" />
</template>
