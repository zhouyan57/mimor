<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorOtherEntry from './AuthorOtherEntry.vue'
import AuthorOtherHead from './AuthorOtherHead.vue'
import AuthorOtherInfo from './AuthorOtherInfo.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'
import { stateResultEntries } from './stateResultEntries'

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

    <div class="flex h-full flex-col space-y-1 overflow-y-auto px-3 py-2">
      <AuthorOtherHead :state="state" />
      <AuthorOtherInfo :state="state" />

      <div v-for="(entry, index) of stateResultEntries(state)" :key="index">
        <AuthorOtherEntry :state="state" :entry="entry" />
      </div>
    </div>
  </PageLayout>
</template>
