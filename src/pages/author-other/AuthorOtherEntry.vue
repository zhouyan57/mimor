<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import SearchResult from '../../components/search/SearchResult.vue'
import { wait } from '../../utils/wait'
import AuthorOtherEntryContent from './AuthorOtherEntryContent.vue'
import AuthorOtherEntryInfo from './AuthorOtherEntryInfo.vue'
import { Entry } from './Entry'
import { State } from './State'

const props = defineProps<{
  state: State
  entry: Entry
}>()

const containerElement = ref<HTMLElement | undefined>(undefined)

async function maybeFocus(): Promise<void> {
  if (props.state.focusedPath === props.entry.path) {
    if (containerElement.value) {
      await nextTick()
      await wait(200)
      containerElement.value.scrollIntoView()
    }
  }
}

onMounted(maybeFocus)

watch(() => props.state.focusedPath, maybeFocus)
</script>

<template>
  <div ref="containerElement" class="flex flex-col">
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
