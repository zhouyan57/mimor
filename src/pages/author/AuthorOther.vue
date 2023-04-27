<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorOtherMimorEntry from './AuthorOtherMimorEntry.vue'
import { State } from './State'
import { stateFindMimorEntries } from './stateFindMimorEntries'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">作者 | 迷墨</title>
      <title v-else>Author | Mimor</title>
    </Head>

    <div class="flex h-full flex-col">
      <div>TODO</div>

      <div class="mt-4 flex h-full flex-col space-y-4 overflow-y-auto">
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
