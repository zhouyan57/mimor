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
    <AuthorOtherEntryInfo :state="state" :entry="entry" />
    <AuthorOtherEntryContent :state="state" :entry="entry" />
  </div>
</template>
