<script setup lang="ts">
import AuthorSelfEntryMarkdown from './AuthorSelfEntryMarkdown.vue'
import AuthorSelfEntryMimor from './AuthorSelfEntryMimor.vue'
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
  <div v-else>Unknown content</div>
</template>
