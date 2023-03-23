<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useRoute } from 'vue-router'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalLang } from '../../reactives/useGlobalLang'

const lang = useGlobalLang()

const route = useRoute()
</script>

<template>
  <PageLayout>
    <template #title>
      <div class="font-logo">404</div>
    </template>

    <Head>
      <title v-if="lang.isZh()">404 | 谜墨</title>
      <title v-else>404 | Mimor</title>
    </Head>

    <div class="flex flex-col space-y-2">
      <div class="text-xl font-bold">
        <Lang>
          <template #zh>没有这个页面</template>
          <template #en>Page Not Found</template>
        </Lang>
      </div>

      <div class="overflow-x-auto font-mono text-sm">{{ route.fullPath }}</div>
    </div>
  </PageLayout>
</template>
