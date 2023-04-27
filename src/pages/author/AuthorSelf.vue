<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted, reactive } from 'vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Mimor from '../../components/mimor/Mimor.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorEditor from './AuthorEditor.vue'
import { MimorEntry } from './MimorEntry'
import { loadMimorEntriesPrivate } from './loadMimorEntriesPrivate'
import { loadMimorEntriesPublic } from './loadMimorEntriesPublic'

const props = defineProps<{ username: string }>()

const lang = useGlobalLang()
const mimorEntries = reactive<Array<MimorEntry>>([])

onMounted(async () => {
  mimorEntries.push(...(await loadMimorEntriesPrivate(props.username)))
  mimorEntries.push(...(await loadMimorEntriesPublic(props.username)))
})
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">作者 | 迷墨</title>
      <title v-else>Author | Mimor</title>
    </Head>

    <div class="flex h-full flex-col">
      <div class="flex flex-col font-serif text-xl">
        <AuthorEditor :username="username" />
      </div>

      <div class="mt-4 flex h-full flex-col space-y-4 overflow-y-auto">
        <Mimor
          class="h-[34rem] max-w-[47rem] shrink-0"
          v-for="mimorEntry of mimorEntries"
          :key="mimorEntry.path"
          :src="`~/${mimorEntry.path}`"
        />
      </div>
    </div>
  </PageLayout>
</template>
