<script setup lang="ts">
import { BookOpenIcon, HomeIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import PageMobileMenuGuest from './PageMobileMenuGuest.vue'
</script>

<template>
  <div class="flex w-full justify-between bg-white py-1">
    <Hyperlink
      href="/"
      :class="{
        'animate-jump-sm text-orange-500': $route.path === '/',
      }"
      class="flex flex-col items-center space-y-1"
    >
      <HomeIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>首页</template>
        <template #en>Home</template>
      </Lang>
    </Hyperlink>

    <PageMobileMenuGuest />

    <Hyperlink
      href="/docs"
      :class="{
        'animate-jump-sm text-orange-500': $route.path === '/docs',
      }"
      class="flex flex-col items-center space-y-1"
    >
      <BookOpenIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>文档</template>
        <template #en>Docs</template>
      </Lang>
    </Hyperlink>
  </div>
</template>
