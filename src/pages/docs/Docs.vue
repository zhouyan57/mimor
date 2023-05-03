<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useCurrentOrigin } from '../../reactives/useCurrentOrigin'

const origin = useCurrentOrigin()
const lang = useGlobalLang()
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">文档 | 谜墨</title>
    <title v-else>Docs | Mimor</title>
  </Head>

  <PageLayout>
    <div
      class="flex h-full flex-col space-y-3 overflow-y-auto p-3 font-serif text-xl"
    >
      <div class="flex items-baseline">
        <div class="font-logo text-2xl font-bold">
          <Lang>
            <template #zh> 文档 </template>
            <template #en> Docs </template>
          </Lang>
        </div>
      </div>

      <Lang>
        <template #zh>
          <a
            :href="`https://readonly.link/manuals/${origin}/contents/manual/en.json`"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
            >谜墨手册（英文）<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >。
        </template>
        <template #en>
          <a
            :href="`https://readonly.link/manuals/${origin}/contents/manual/en.json`"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
            >Mimor Manual<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >.
        </template>
      </Lang>

      <Lang>
        <template #zh>
          <a
            :href="`https://readonly.link/manuals/${origin}/contents/manual/zh.json`"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
            >谜墨手册<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >。
        </template>
        <template #en>
          <a
            :href="`https://readonly.link/manuals/${origin}/contents/manual/zh.json`"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
            >Mimor Manual (Chinese)<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >.
        </template>
      </Lang>
    </div>
  </PageLayout>
</template>
