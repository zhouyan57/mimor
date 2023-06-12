<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import SearchInput from '../../components/search/SearchInput.vue'
import ListLazyScroll from '../../components/utils/ListLazyScroll.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorOtherEntry from './AuthorOtherEntry.vue'
import AuthorOtherHead from './AuthorOtherHead.vue'
import AuthorOtherInfo from './AuthorOtherInfo.vue'
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

    <div class="flex h-full flex-col">
      <div class="flex flex-col space-y-2 px-3 py-2 text-xl">
        <AuthorOtherHead :state="state" />
        <AuthorOtherInfo :state="state" />
      </div>

      <div v-show="state.isSearching" class="flex w-full px-3 py-1 text-xl">
        <SearchInput
          v-show="state.isSearching"
          class="w-full max-w-[47rem]"
          :state="state.searchState"
        />
      </div>

      <ListLazyScroll
        v-show="!state.isSearching"
        class="flex flex-col space-y-3 px-3 pb-2"
        :entries="stateEntriesSorted(state)"
        :chunkSize="3"
      >
        <template #entry="{ entry }">
          <AuthorOtherEntry :state="state" :entry="entry" />
        </template>
      </ListLazyScroll>

      <ListLazyScroll
        v-show="state.isSearching"
        class="flex flex-col space-y-3 px-3 pb-2"
        :entries="stateEntriesFiltered(state)"
        :chunkSize="3"
      >
        <template #entry="{ entry }">
          <AuthorOtherEntry :state="state" :entry="entry" />
        </template>
      </ListLazyScroll>
    </div>
  </PageLayout>
</template>
