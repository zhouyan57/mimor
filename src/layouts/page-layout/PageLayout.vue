<script setup lang="ts">
import { useRouter } from 'vue-router'
import PageDesktopSidebar from './PageDesktopSidebar.vue'
import PageHead from './PageHead.vue'
import PageMobileMenu from './PageMobileMenu.vue'

const router = useRouter()
</script>

<template>
  <PageHead
    class="fixed top-0 left-0 border-b border-stone-400 bg-white px-3 py-1 opacity-90 md:py-2"
  >
    <template #title>
      <slot name="title" />
    </template>
  </PageHead>

  <div class="flex h-screen">
    <div class="hidden h-full w-[25rem] shrink-0 flex-col p-3 md:flex">
      <div class="pt-10 md:pt-12"></div>
      <PageDesktopSidebar />
    </div>

    <div
      class="flex h-full w-full flex-col space-y-2 overflow-x-auto overflow-y-auto p-3"
    >
      <div class="pt-10 md:pt-12"></div>
      <slot />
    </div>
  </div>

  <div class="fixed bottom-20 right-4 z-30 md:hidden">
    <PageMobileMenu />
  </div>
</template>
