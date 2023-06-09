<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import SearchInput from '../../components/search/SearchInput.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorEditor from './AuthorEditor.vue'
import AuthorSelfEntry from './AuthorSelfEntry.vue'
import AuthorSelfHead from './AuthorSelfHead.vue'
import { State } from './State'
import { stateEntriesFiltered } from './stateEntriesFiltered'
import { stateEntriesSorted } from './stateEntriesSorted'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const lang = useGlobalLang()

const state = stateReactive(props.state)
</script>

<template>
  <PageLayout :noMobileHead="true">
    <Head>
      <title v-if="lang.isZh()">{{ state.username }} | 谜墨</title>
      <title v-else>{{ state.username }} | Mimor</title>
    </Head>

    <div class="flex h-full flex-col">
      <div class="flex flex-col px-3 pt-2 text-xl">
        <AuthorSelfHead :state="state" />
      </div>

      <div class="flex w-full px-3 py-2 text-xl">
        <SearchInput
          v-show="state.isSearching"
          class="w-full max-w-[47rem]"
          :state="state.searchState"
        />

        <AuthorEditor
          v-show="!state.isSearching"
          class="w-full max-w-[47rem]"
          :state="state"
        />
      </div>

      <div
        v-show="state.isSearching"
        class="flex h-full flex-col space-y-3 overflow-y-auto px-3 pb-3"
      >
        <div v-for="(entry, index) of stateEntriesFiltered(state)" :key="index">
          <AuthorSelfEntry :state="state" :entry="entry" />
        </div>
      </div>

      <div
        v-show="!state.isSearching"
        class="flex h-full flex-col space-y-3 overflow-y-auto px-3 pb-3"
      >
        <div v-for="(entry, index) of stateEntriesSorted(state)" :key="index">
          <AuthorSelfEntry :state="state" :entry="entry" />
        </div>
      </div>
    </div>
  </PageLayout>
</template>
