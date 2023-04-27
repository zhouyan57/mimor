<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorOtherHead from './AuthorOtherHead.vue'
import AuthorOtherMimorEntry from './AuthorOtherMimorEntry.vue'
import { State } from './State'
import { stateFindMimorEntries } from './stateFindMimorEntries'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">{{ state.username }} | 谜墨</title>
      <title v-else>{{ state.username }} | Mimor</title>
    </Head>

    <div class="flex h-full flex-col">
      <div class="flex flex-col px-3 py-3 text-xl">
        <AuthorOtherHead :state="state" />
      </div>

      <div class="flex h-full flex-col space-y-3 overflow-y-auto px-3 pb-3">
        <AuthorOtherMimorEntry
          v-for="mimorEntry of stateFindMimorEntries(state)"
          :key="mimorEntry.path"
          :state="state"
          :mimorEntry="mimorEntry"
        />
      </div>
    </div>
  </PageLayout>
</template>
