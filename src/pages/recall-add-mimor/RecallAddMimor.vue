<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { Head } from '@vueuse/head'

const lang = useGlobalLang()
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">加入回顾 | 谜墨</title>
    <title v-else>Add to Recall | Mimor</title>
  </Head>

  <PageLayout>
    <div
      class="font-serif flex h-full flex-col space-y-3 overflow-y-auto p-3 text-xl"
    >
      <div class="flex items-baseline">
        <div class="font-logo text-2xl font-bold">
          <Lang>
            <template #zh> 加入回顾 </template>
            <template #en> Add to Recall </template>
          </Lang>
        </div>
      </div>
    </div>
  </PageLayout>
</template>
