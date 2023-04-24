<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/outline'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/lang/Lang.vue'
import PageMobileMenuGuest from './PageMobileMenuGuest.vue'
</script>

<template>
  <div class="flex w-full justify-between bg-white px-4 py-1 opacity-95">
    <Hyperlink
      href="/"
      class="flex flex-col items-center space-y-1 text-stone-400"
    >
      <HomeIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>首页</template>
        <template #en>Home</template>
      </Lang>
    </Hyperlink>

    <button class="text-stone-400">TODO</button>

    <PageMobileMenuGuest class="border border-stone-300 p-2" />

    <button class="text-stone-400">TODO</button>

    <button class="text-stone-400">TODO</button>
  </div>
</template>
