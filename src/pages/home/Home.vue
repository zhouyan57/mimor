<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted, reactive } from 'vue'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import Mimor from '../../components/mimor/Mimor.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { HomeState as State } from './HomeState'

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
      <div class="flex space-x-2">
        <Link href="/" class="hover:underline">
          <Lang>
            <template #zh>首页</template>
            <template #en>Home</template>
          </Lang>
        </Link>

        <Link href="/authors" class="hover:underline">
          <Lang>
            <template #zh>作者</template>
            <template #en>Authors</template>
          </Lang>
        </Link>

        <Link href="/about" class="hover:underline">
          <Lang>
            <template #zh>关于</template>
            <template #en>About</template>
          </Lang>
        </Link>
      </div>
    </template>

    <div class="flex h-full flex-col">
      <div v-if="state.loading">Loading...</div>

      <Mimor
        v-else-if="!state.finished"
        class="h-full border"
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
