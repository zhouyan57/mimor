<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorEditor from './AuthorEditor.vue'
import AuthorSelfEntry from './AuthorSelfEntry.vue'
import { State } from './State'
import { stateFindEntries } from './stateFindEntries'

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
      <div class="flex flex-col px-3 py-3 text-xl">
        <AuthorEditor class="max-w-[47rem]" :state="state" />
      </div>

      <div class="flex h-full flex-col space-y-3 overflow-y-auto px-3 pb-3">
        <AuthorSelfEntry
          v-for="entry of stateFindEntries(state)"
          :key="entry.path"
          :state="state"
          :entry="entry"
        />
      </div>
    </div>
  </PageLayout>
</template>
