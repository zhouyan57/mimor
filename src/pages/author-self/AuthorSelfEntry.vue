<script setup lang="ts">
import SearchResult from '../../components/search/SearchResult.vue'
import AuthorSelfEntryContent from './AuthorSelfEntryContent.vue'
import AuthorSelfEntryInfo from './AuthorSelfEntryInfo.vue'
import AuthorSelfEntryToolbar from './AuthorSelfEntryToolbar.vue'
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
      <AuthorSelfEntryInfo :state="state" :entry="entry" />
      <AuthorSelfEntryToolbar :state="state" :entry="entry" />

      <SearchResult
        v-if="state.searchState.results[entry.path]"
        :state="state.searchState"
        :result="state.searchState.results[entry.path]"
      />
    </div>

    <AuthorSelfEntryContent :state="state" :entry="entry" />
  </div>
</template>
