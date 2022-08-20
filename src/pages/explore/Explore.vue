<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted, reactive } from 'vue'
import Lang from '../../components/Lang.vue'
import Mimor from '../../components/mimor/Mimor.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { ExploreState as State } from './ExploreState'

const state = reactive(new State())

onMounted(() => state.load())
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="$app.lang.zh">探索 | 谜墨</title>
      <title v-else>Explore | Mimor</title>
    </Head>

    <template #title>
      <Lang>
        <template #zh>探索</template>
        <template #en>Explore</template>
      </Lang>
    </template>

    <div class="flex h-full flex-col">
      <div v-if="state.loading">Loading...</div>

      <Mimor
        v-else-if="!state.finished"
        class="h-full"
        :key="state.flag.toString()"
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

        <button class="border p-2 text-2xl" @click="state.again()">
          Again
        </button>
      </div>
    </div>
  </PageLayout>
</template>
