<script setup lang="ts">
import { useRouter } from 'vue-router'
import PageDesktopHead from './PageDesktopHead.vue'
import PageDesktopSidebar from './PageDesktopSidebar.vue'
import PageMobileHead from './PageMobileHead.vue'
import PageMobileMenu from './PageMobileMenu.vue'

const router = useRouter()
</script>

<template>
  <PageDesktopHead
    class="fixed left-0 top-0 hidden border-b border-black bg-white px-4 py-2 md:block"
  />

  <PageMobileHead
    class="fixed left-0 top-0 block border-b border-stone-300 bg-white px-4 py-0.5 md:hidden"
  />

  <div class="flex h-screen pt-8 md:pt-12">
    <div class="hidden h-full w-[25rem] shrink-0 flex-col px-4 py-3 md:flex">
      <PageDesktopSidebar />
    </div>

    <div
      class="flex h-full w-full flex-col overflow-x-auto overflow-y-auto p-4"
    >
      <slot />
    </div>
  </div>

  <div class="fixed bottom-20 right-4 z-30 md:hidden">
    <PageMobileMenu />
  </div>
</template>
