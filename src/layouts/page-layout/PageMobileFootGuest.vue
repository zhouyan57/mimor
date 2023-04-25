<script setup lang="ts">
import { BookOpenIcon, HomeIcon } from '@heroicons/vue/24/outline'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/lang/Lang.vue'
import PageMobileMenuGuest from './PageMobileMenuGuest.vue'
</script>

<template>
  <div class="flex w-full justify-between bg-white py-1 opacity-95">
    <Hyperlink
      href="/"
      class="flex flex-col items-center space-y-1 text-stone-700"
    >
      <HomeIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>首页</template>
        <template #en>Home</template>
      </Lang>
    </Hyperlink>

    <PageMobileMenuGuest class="border border-stone-500 p-2" />

    <Hyperlink
      href="/docs"
      class="flex flex-col items-center space-y-1 text-stone-700"
    >
      <BookOpenIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>文档</template>
        <template #en>Docs</template>
      </Lang>
    </Hyperlink>
  </div>
</template>
