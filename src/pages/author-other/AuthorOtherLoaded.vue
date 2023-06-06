<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorOtherEntry from './AuthorOtherEntry.vue'
import AuthorOtherHead from './AuthorOtherHead.vue'
import { State } from './State'
import { stateFindEntries } from './stateFindEntries'
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

    <div class="flex h-full flex-col overflow-y-auto p-3">
      <AuthorOtherHead :state="state" />

      <AuthorOtherEntry
        v-for="(entry, index) of stateFindEntries(state)"
        :key="index"
        :state="state"
        :entry="entry"
      />
    </div>
  </PageLayout>
</template>
