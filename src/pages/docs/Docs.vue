<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
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

    <div class="flex h-full flex-col space-y-3 text-xl">
      <div class="flex items-baseline space-x-4">
        <div class="font-logo text-2xl font-semibold text-stone-800">
          <Lang>
            <template #zh> 文档 </template>
            <template #en> Docs </template>
          </Lang>
        </div>
      </div>

      <Lang>
        <template #zh>
          <a
            href="https://readonly.link/manuals/https://mimor.app/contents/manual/en.json"
            class="inline-flex items-center underline"
            target="_blank"
            >迷墨手册（英文）<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >。
        </template>
        <template #en>
          <a
            href="https://readonly.link/manuals/https://mimor.app/contents/manual/en.json"
            class="inline-flex items-center underline"
            target="_blank"
            >Mimor Manual<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >.
        </template>
      </Lang>

      <Lang>
        <template #zh>
          <a
            href="https://readonly.link/manuals/https://mimor.app/contents/manual/zh.json"
            class="inline-flex items-center underline"
            target="_blank"
            >迷墨手册<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >。
        </template>
        <template #en>
          <a
            href="https://readonly.link/manuals/https://mimor.app/contents/manual/zh.json"
            class="inline-flex items-center underline"
            target="_blank"
            >Mimor Manual (Chinese)<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >.
        </template>
      </Lang>
    </div>
  </PageLayout>
</template>
