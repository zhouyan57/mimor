<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import SearchInput from '../../components/search/SearchInput.vue'
import ListLazyScroll from '../../components/utils/ListLazyScroll.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorEditor from './AuthorEditor.vue'
import AuthorSelfEntry from './AuthorSelfEntry.vue'
import AuthorSelfHead from './AuthorSelfHead.vue'
import AuthorSelfInfo from './AuthorSelfInfo.vue'
import { State } from './State'
import { stateEntriesFiltered } from './stateEntriesFiltered'
import { stateEntriesSorted } from './stateEntriesSorted'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <PageLayout :noMobileHead="true">
    <Head>
      <title v-if="lang.isZh()">{{ state.username }} | 谜墨</title>
      <title v-else>{{ state.username }} | Mimor</title>
    </Head>

    <div class="flex h-full max-w-[47rem] flex-col">
      <div class="flex flex-col space-y-2 px-3 py-2 text-xl">
        <AuthorSelfHead :state="state" />
        <AuthorSelfInfo :state="state" />
      </div>

      <div v-show="!state.isSearching" class="flex w-full px-3 py-1 text-xl">
        <AuthorEditor class="w-full" :state="state" />
      </div>

      <div v-show="state.isSearching" class="flex w-full px-3 py-1 text-xl">
        <SearchInput class="w-full" :state="state.searchState" />
      </div>

      <ListLazyScroll
        v-show="!state.isSearching"
        class="flex flex-col space-y-3 px-3 pb-2"
        :entries="stateEntriesSorted(state)"
        :chunkSize="3"
        :eagerLoadAll="state.eagerLoadAll"
      >
        <template #entry="{ entry }">
          <AuthorSelfEntry :state="state" :entry="entry" />
        </template>

        <template #bottom="{ isFinished }">
          <div
            class="py-px"
            :class="{
              'animate-pulse border-t border-orange-500': !isFinished,
            }"
          ></div>
        </template>
      </ListLazyScroll>

      <ListLazyScroll
        v-show="state.isSearching"
        class="flex flex-col space-y-3 px-3 pb-2"
        :entries="stateEntriesFiltered(state)"
        :chunkSize="3"
        :eagerLoadAll="state.eagerLoadAll"
      >
        <template #entry="{ entry }">
          <AuthorSelfEntry :state="state" :entry="entry" />
        </template>

        <template #bottom="{ isFinished }">
          <div
            class="py-px"
            :class="{
              'animate-pulse border-t border-orange-500': !isFinished,
            }"
          ></div>
        </template>
      </ListLazyScroll>
    </div>
  </PageLayout>
</template>
