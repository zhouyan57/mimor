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
    <title v-if="lang.isZh()">关于 | 谜墨</title>
    <title v-else>About | Mimor</title>
  </Head>

  <PageLayout>
    <div
      class="flex h-full flex-col space-y-3 overflow-y-auto p-3 font-serif text-xl"
    >
      <div class="flex items-baseline">
        <div class="font-logo text-2xl font-bold">
          <Lang>
            <template #zh> 关于 </template>
            <template #en> About </template>
          </Lang>
        </div>
      </div>

      <Lang>
        <template #zh> 谜墨开始于一个辅助记忆工具。 </template>
        <template #en> Mimor started as a memory helping tool. </template>
      </Lang>

      <Lang>
        <template #zh>
          受到
          <a
            href="https://apps.ankiweb.net"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
            >Anki<ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500"
          /></a>
          和
          <a
            href="https://withorbit.com"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
            >Orbit<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500"
          /></a>
          还有
          <a
            href="https://flomoapp.com"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
            >flomo<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500"
          /></a>
          的启发。
        </template>
        <template #en>
          Inspired by
          <a
            href="https://apps.ankiweb.net"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
            >Anki<ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500"
          /></a>
          and
          <a
            href="https://withorbit.com"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
            >Orbit<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500"
          /></a>
          and
          <a
            href="https://flomoapp.com"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
            >flomo<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >.
        </template>
      </Lang>

      <Lang>
        <template #zh>
          项目在 2021 年由
          <a
            href="https://xieyuheng.com"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
          >
            谢宇恒
            <ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500" />
          </a>
          发起。
        </template>
        <template #en>
          The project was founded by
          <a
            href="https://xieyuheng.com"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
          >
            Xie Yuheng
            <ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500" />
          </a>
          in 2021.
        </template>
      </Lang>

      <div class="flex items-baseline">
        <div class="font-logo text-2xl font-bold">
          <Lang>
            <template #zh> 开源 </template>
            <template #en> Open source </template>
          </Lang>
        </div>
      </div>

      <Lang>
        <template #zh>
          <a
            href="http://github.com/mimor-official/mimor"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
            >源代码<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >。
        </template>
        <template #en>
          <a
            href="http://github.com/mimor-official/mimor"
            class="inline-flex items-center text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
            target="_blank"
          >
            Source code
            <ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500" /></a
          >.
        </template>
      </Lang>

      <div class="flex items-baseline">
        <div class="font-logo text-2xl font-bold">
          <Lang>
            <template #zh> 口号 </template>
            <template #en> Slogan </template>
          </Lang>
        </div>
      </div>

      <Lang>
        <template #zh> 我们的口号是： </template>
        <template #en> Our slogan is: </template>
      </Lang>

      <Lang class="font-logo text-xl font-bold">
        <template #zh> 把记忆变成选择 </template>
        <template #en> Making memory a choice </template>
      </Lang>

      <Lang>
        <template #zh> 奋进！ </template>
        <template #en> Endeavour! </template>
      </Lang>
    </div>
  </PageLayout>
</template>
