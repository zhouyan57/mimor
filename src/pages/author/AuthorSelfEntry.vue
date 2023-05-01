<script setup lang="ts">
import Mimor from '../../components/mimor/Mimor.vue'
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

    <Mimor
      class="h-[34rem] max-w-[47rem] shrink-0"
      :key="entry.path"
      :src="`~/${entry.path}`"
    />
  </div>
</template>
