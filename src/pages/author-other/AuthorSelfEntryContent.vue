<script setup lang="ts">
import AuthorSelfEntryMimor from './AuthorSelfEntryMimor.vue'
import AuthorSelfEntryMarkdown from './AuthorSelfEntryNote.vue'
import AuthorSelfEntryUnknown from './AuthorSelfEntryUnknown.vue'
import { Entry } from './Entry'
import { State } from './State'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <AuthorSelfEntryMimor
    v-if="entry.path.endsWith('.mimor')"
    :state="state"
    :entry="entry"
  />

  <AuthorSelfEntryMarkdown
    v-else-if="entry.path.endsWith('.md')"
    :state="state"
    :entry="entry"
  />

  <AuthorSelfEntryUnknown v-else :state="state" :entry="entry" />
</template>
