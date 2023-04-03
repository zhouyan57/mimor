<script setup lang="ts">
import { useRouter } from 'vue-router'
import PageDesktopSidebar from './PageDesktopSidebar.vue'
import PageHead from './PageHead.vue'
import PageMobileMenu from './PageMobileMenu.vue'

const router = useRouter()
</script>

<template>
  <PageHead
    class="fixed left-0 top-0 border-b border-black bg-white px-4 py-1 md:py-2"
  >
  </PageHead>

  <div class="flex h-screen pt-10 md:pt-12">
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
