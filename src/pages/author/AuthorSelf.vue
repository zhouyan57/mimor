<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorEditor from './AuthorEditor.vue'
import AuthorSelfMimorEntry from './AuthorSelfMimorEntry.vue'
import { State } from './State'
import { stateFindMimorEntries } from './stateFindMimorEntries'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">{{ state.username }} | 迷墨</title>
      <title v-else>{{ state.username }} | Mimor</title>
    </Head>

    <div class="flex h-full flex-col">
      <div class="flex flex-col font-serif text-xl">
        <AuthorEditor :state="state" />
      </div>

      <div class="mt-3 flex h-full flex-col space-y-3 overflow-y-auto">
        <AuthorSelfMimorEntry
          v-for="mimorEntry of stateFindMimorEntries(state)"
          :key="mimorEntry.path"
          :state="state"
          :mimorEntry="mimorEntry"
        />
      </div>
    </div>
  </PageLayout>
</template>
