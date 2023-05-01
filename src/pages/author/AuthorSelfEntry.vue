<script setup lang="ts">
import AuthorSelfEntryContent from './AuthorSelfEntryContent.vue'
import AuthorSelfEntryHead from './AuthorSelfEntryHead.vue'
import { Entry } from './Entry'
import { State } from './State'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <div>
    <AuthorSelfEntryHead :state="state" :entry="entry" />
    <AuthorSelfEntryContent :state="state" :entry="entry" />
  </div>
</template>
