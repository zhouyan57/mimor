<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted, reactive } from 'vue'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import Loading from '../../components/Loading.vue'
import Mimor from '../../components/mimor/Mimor.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { State } from './State'

const state = reactive(new State())

onMounted(() => state.load())
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="$app.lang.zh">谜墨</title>
      <title v-else>Mimor</title>
    </Head>

    <template #title>
      <div class="flex justify-between space-x-2">
        <Lang>
          <template #zh>首页</template>
          <template #en>Home</template>
        </Lang>

        <div class="flex justify-end space-x-2">
          <Link href="/about" class="hover:underline">
            <Lang>
              <template #zh>关于</template>
              <template #en>About</template>
            </Lang>
          </Link>
        </div>
      </div>
    </template>

    <div class="flex h-full flex-col">
      <Loading class="text-xl" v-if="state.loading" />

      <Mimor
        v-else-if="!state.finished"
        class="h-full border border-stone-300"
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
