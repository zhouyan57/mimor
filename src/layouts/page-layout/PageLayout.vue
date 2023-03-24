<script setup lang="ts">
import PageDesktopSidebar from './PageDesktopSidebar.vue'
import PageHead from './PageHead.vue'
import PageMobileMenu from './PageMobileMenu.vue'
</script>

<template>
  <div class="flex h-screen">
    <div class="hidden h-full w-[25rem] shrink-0 flex-col p-3 md:flex">
      <PageDesktopSidebar />
    </div>

    <div class="flex h-full w-full flex-col space-y-2 overflow-x-auto py-3">
      <PageHead class="px-3">
        <template #title>
          <slot name="title" />
        </template>
      </PageHead>

      <div class="h-full w-full overflow-y-auto px-3">
        <slot />
      </div>
    </div>

    <div class="fixed bottom-20 right-4 z-30 md:hidden">
      <PageMobileMenu />
    </div>
  </div>
</template>
