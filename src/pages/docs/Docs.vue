<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const lang = useGlobalLang()
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">文档 | 迷墨</title>
    <title v-else>Docs | Mimor</title>
  </Head>

  <PageLayout>
    <template #title>
      <Lang>
        <template #zh>文档</template>
        <template #en>Docs</template>
      </Lang>
    </template>

    <div class="flex h-full flex-col text-xl">TODO</div>
  </PageLayout>
</template>
