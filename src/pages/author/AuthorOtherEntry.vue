<script setup lang="ts">
import AuthorOtherEntryContent from './AuthorOtherEntryContent.vue'
import AuthorOtherEntryHead from './AuthorOtherEntryHead.vue'
import { Entry } from './Entry'
import { State } from './State'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <div>
    <AuthorOtherEntryHead :state="state" :entry="entry" />
    <AuthorOtherEntryContent :state="state" :entry="entry" />
  </div>
</template>
