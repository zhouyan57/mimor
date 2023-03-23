<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted, reactive, ref } from 'vue'
import Lang from '../../components/Lang.vue'
import Mimor from '../../components/mimor/Mimor.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import { State } from './State'
import { loadState } from './loadState'

const lang = useGlobalLang()

const state = ref<State | undefined>(undefined)

onMounted(async () => {
  state.value = reactive(await loadState({}))
})
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">谜墨</title>
      <title v-else>Mimor</title>
    </Head>

    <template #title>
      <Lang>
        <template #zh>首页</template>
        <template #en>Home</template>
      </Lang>
    </template>

    <div class="flex h-full flex-col">
      <div v-if="state === undefined">Loading...</div>

      <Mimor
        v-else-if="!state.finished"
        class="h-full border border-stone-300"
        :options="{
          text: state.text,
          program: {
            onFinished: () => {
              state.finished = true
            },
          },
        }"
      />

      <div v-else class="flex h-full flex-col items-start justify-between">
        <div></div>

        <div class="flex w-full justify-center">
          <div class="text-4xl">The End</div>
        </div>

        <button class="border p-2 text-2xl" @click="state.finished = false">
          Again
        </button>
      </div>
    </div>
  </PageLayout>
</template>
