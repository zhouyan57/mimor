<script setup lang="ts">
import AuthorSelfEntryContent from './AuthorSelfEntryContent.vue'
import AuthorSelfEntryInfo from './AuthorSelfEntryInfo.vue'
import { Entry } from './Entry'
import { State } from './State'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <div class="flex flex-col">
    <AuthorSelfEntryInfo :state="state" :entry="entry" />
    <AuthorSelfEntryContent :state="state" :entry="entry" />
  </div>
</template>
