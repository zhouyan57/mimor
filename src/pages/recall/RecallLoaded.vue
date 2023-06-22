<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted, ref } from 'vue'
import RecallEntry from './RecallEntry.vue'
import ListLazyScroll from '../../components/utils/ListLazyScroll.vue'
import { useRouter } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import RecallTop from './RecallTop.vue'
import RecallHead from './RecallHead.vue'
import RecallCalendar from './RecallCalendar.vue'
import { State } from './State'

defineProps<{ state: State }>()

const router = useRouter()
const lang = useGlobalLang()
</script>

<template>
  <PageLayout :noMobileHead="true">
    <Head>
      <title v-if="lang.isZh()">回顾 | 谜墨</title>
      <title v-else>Recall | Mimor</title>
    </Head>

    <div class="flex h-full max-w-[47rem] flex-col overflow-auto">
      <RecallTop :state="state" />

      <div
        class="sticky top-0 flex flex-col bg-white px-3 py-2 md:border-t md:border-black"
      >
        <RecallHead :state="state" />
      </div>

      <div class="flex w-full px-3 py-1 text-xl">
        <RecallCalendar class="w-full" :state="state" />
      </div>

      <ListLazyScroll
        class="flex flex-col space-y-3 px-3 pb-2"
        :entries="state.entries"
        :chunkSize="3"
      >
        <template #entry="{ entry }">
          <RecallEntry :state="state" :entry="entry" />
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
