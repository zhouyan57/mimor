<script setup lang="ts">
import SearchResult from '../../components/search/SearchResult.vue'
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
    <div class="flex flex-col space-y-1 py-2">
      <AuthorOtherEntryInfo :state="state" :entry="entry" />

      <SearchResult
        v-if="state.isSearching && state.searchState.results[entry.path]"
        :state="state.searchState"
        :result="state.searchState.results[entry.path]"
      />
    </div>

    <AuthorOtherEntryContent :state="state" :entry="entry" />
  </div>
</template>
