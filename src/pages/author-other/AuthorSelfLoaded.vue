<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorEditor from './AuthorEditor.vue'
import AuthorSelfEntry from './AuthorSelfEntry.vue'
import AuthorSelfHead from './AuthorSelfHead.vue'
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

    <div class="flex h-full flex-col">
      <div class="flex flex-col px-3 pt-2 text-xl">
        <AuthorSelfHead :state="state" />
      </div>

      <div class="flex flex-col px-3 py-2 text-xl">
        <AuthorEditor class="max-w-[47rem]" :state="state" />
      </div>

      <div class="flex h-full flex-col space-y-3 overflow-y-auto px-3 pb-3">
        <AuthorSelfEntry
          v-for="(entry, index) of stateFindEntries(state)"
          :key="index"
          :state="state"
          :entry="entry"
        />
      </div>
    </div>
  </PageLayout>
</template>
