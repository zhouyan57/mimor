<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import SearchResult from '../../components/search/SearchResult.vue'
import { wait } from '../../utils/wait'
import AuthorSelfEntryContent from './AuthorSelfEntryContent.vue'
import AuthorSelfEntryInfo from './AuthorSelfEntryInfo.vue'
import AuthorSelfEntryToolbar from './AuthorSelfEntryToolbar.vue'
import { Entry } from './Entry'
import { State } from './State'

const props = defineProps<{
  state: State
  entry: Entry
}>()

const containerElement = ref<HTMLElement | undefined>(undefined)

onMounted(async () => {
  if (props.state.focusedPath === props.entry.path) {
    if (containerElement.value) {
      await nextTick()
      await wait(200)
      containerElement.value.scrollIntoView()
    }
  }
})

watch(
  () => props.state.focusedPath,
  async () => {
    if (props.state.focusedPath === props.entry.path) {
      if (containerElement.value) {
        await nextTick()
        await wait(200)
        containerElement.value.scrollIntoView()
      }
    }
  },
)
</script>

<template>
  <div ref="containerElement" class="flex flex-col">
    <div class="flex flex-col space-y-1 py-2">
      <AuthorSelfEntryInfo :state="state" :entry="entry" />
      <AuthorSelfEntryToolbar :state="state" :entry="entry" />

      <SearchResult
        v-if="state.isSearching && state.searchState.results[entry.path]"
        :state="state.searchState"
        :result="state.searchState.results[entry.path]"
      />
    </div>

    <AuthorSelfEntryContent :state="state" :entry="entry" />
  </div>
</template>
