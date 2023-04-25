<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useRouter } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'

const router = useRouter()
const lang = useGlobalLang()
const auth = useGlobalAuth()
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">设置 | 迷墨</title>
    <title v-else>Settings | Mimor</title>
  </Head>

  <PageLayout>
    <div class="flex h-full flex-col space-y-3 font-serif text-xl">
      <div class="flex items-baseline space-x-4">
        <div class="font-logo text-2xl font-bold text-stone-800">
          <Lang>
            <template #zh> 设置 </template>
            <template #en> Settings </template>
          </Lang>
        </div>
      </div>

      <div>TODO</div>
    </div>
  </PageLayout>
</template>
