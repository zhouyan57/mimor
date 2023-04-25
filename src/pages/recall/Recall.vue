<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const lang = useGlobalLang()
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">回顾 | 迷墨</title>
    <title v-else>Recall | Mimor</title>
  </Head>

  <PageLayout>
    <div class="flex h-full flex-col space-y-3 font-serif text-xl">
      <div class="flex items-baseline space-x-4">
        <div class="font-logo text-2xl font-bold text-stone-800">
          <Lang>
            <template #zh> 回顾 </template>
            <template #en> Recall </template>
          </Lang>
        </div>
      </div>

      <div>TODO</div>
    </div>
  </PageLayout>
</template>
